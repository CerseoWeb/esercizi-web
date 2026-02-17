const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const baseDir = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(__dirname, "javascript");
const outputDir = path.join(__dirname, ".zip");

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function psQuote(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

function sanitizeFilename(name) {
  return name.replace(/[<>:"/\\|?*]/g, "-").trim();
}

function splitName(dirName) {
  let number = "";
  let desc = dirName;

  const underscoreIndex = dirName.indexOf("_");
  if (underscoreIndex !== -1) {
    number = dirName.slice(0, underscoreIndex).trim();
    desc = dirName.slice(underscoreIndex + 1);
  } else {
    const match = dirName.match(/^(\d+)\s+(.+)$/);
    if (match) {
      number = match[1];
      desc = match[2];
    }
  }

  desc = desc.replace(/_/g, " ").replace(/\s+/g, " ").trim();
  if (!number) {
    number = "00";
  }

  return { number, desc };
}

function createZipForDir(dirPath) {
  const dirName = path.basename(dirPath);
  const { number, desc } = splitName(dirName);
  const zipName = sanitizeFilename(`JS_Esercizi ${number} - ${desc}.zip`);
  const zipPath = path.join(outputDir, zipName);
  const sourceGlob = path.join(dirPath, "*");

  const psCommand = [
    "$ErrorActionPreference = 'Stop'",
    `if (Test-Path -LiteralPath ${psQuote(zipPath)}) { Remove-Item -LiteralPath ${psQuote(zipPath)} -Force }`,
    `Compress-Archive -Path ${psQuote(sourceGlob)} -DestinationPath ${psQuote(zipPath)} -Force`
  ].join("; ");

  execFileSync("powershell", ["-NoProfile", "-Command", psCommand], {
    stdio: "inherit"
  });

  console.log(`Creato: ${zipName}`);
}

function main() {
  if (!fs.existsSync(baseDir)) {
    throw new Error(`Cartella non trovata: ${baseDir}`);
  }

  ensureDir(outputDir);

  const entries = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(baseDir, entry.name));

  for (const dirPath of entries) {
    if (path.basename(dirPath).toLowerCase() === ".zip") {
      continue;
    }
    createZipForDir(dirPath);
  }
}

main();
