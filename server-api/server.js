// 1. Controllo e installazione automatica dipendenze
const { execSync } = require('child_process');
execSync('npm install', { stdio: 'inherit' });


// 2. Avvio del server JSON
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database/db.json');
const middlewares = jsonServer.defaults({ static: 'public' });


// Configurazione del server
server.use(middlewares);
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});
server.get('/api', (req, res) => {
    const keys = Object.keys(router.db.getState());
    const schema = {};
    keys.forEach(key => {
        schema[key] = Object.keys(router.db.getState()[key][0]);
    });
    res.json(schema);
});
server.use('/api', router);

// Avvio del server
const host = '0.0.0.0';
const port = 5000;
server.listen(port, host, () => {
    console.log(`\nJSON Server is running:`);

    const os = require('os');
    const interfaces = os.networkInterfaces();
    Object.keys(interfaces).forEach((ifname) => {
        interfaces[ifname].forEach((iface) => {
            // Filtra IPv4 non interni
            if (iface.family === 'IPv4' && !iface.internal) {
                // Filtra spesso le interfacce virtuali (opzionale ma utile)
                // 192.168.56.x è solitamente VirtualBox Host-Only
                if (!iface.address.startsWith('192.168.56')) { 
                    console.log(`    http://${iface.address}:${port}/api`);
                }
            }
        });
    });


    console.log('\nResources:');
    Object.keys(router.db.getState()).forEach(key => {
        console.log(`/api/${key}`);
    });
});
