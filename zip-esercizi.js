const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const baseDir = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(__dirname, "javascript");
const outputDir = path.join(__dirname, ".zip");

function getSigna(dirName) {
  // Se contiene underscore, prende prima lettera di ogni parola
  if (dirName.includes("_")) {
    return dirName
      .split("_")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }
  // Altrimenti prende le prime 2 lettere
  return dirName.substring(0, 2).toUpperCase();
}

const sigla = getSigna(path.basename(baseDir));

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
  const zipName = sanitizeFilename(`${sigla}_Esercizi ${number} - ${desc}.zip`);
  const zipPath = psQuote(path.join(outputDir, zipName));

  // Get all entries excluding node_modules
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.name !== "node_modules")
    .map((entry) => path.join(dirPath, entry.name));

  if (entries.length === 0) {
    console.log(`Nessun file da zippare in: ${dirName}`);
    return;
  }

  const pathsQuoted = entries.map(psQuote);

  // Se su windows uso PowerShell per comprimere, altrimenti uso zip
  if (process.platform !== "win32") {
    const zipCommand = ["zip", "-q", "-r", zipPath, ...pathsQuoted].join(" ");
    execFileSync("sh", ["-c", zipCommand], { stdio: "inherit" });
    console.log(`Creato: ${zipName}`);
    return;
  }

  const psCommand = [
    "$ErrorActionPreference = 'Stop'",
    `if (Test-Path -LiteralPath ${zipPath}) { Remove-Item -LiteralPath ${zipPath} -Force }`,
    `Compress-Archive -Path @(${pathsQuoted.join(", ")}) -DestinationPath ${zipPath} -Force`
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
