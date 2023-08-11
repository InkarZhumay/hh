const fs = require('fs');
const path = require('path');

module.exports = {
    development:{
        username: 'admin',
        password: 'root',
        database: 'admin',
        host: 'localhost',
        dialect: 'postgres',
    },
    production: {
        username: 'doadmin',
        password: 'AVNS_rpeKir_-Tm2jUSlSk0S',
        database: 'defaultdb',
        host: 'private-db-postgresql-sgp1-28207-do-user-14482502-0.b.db.ondigitalocean.com',
        dialect: 'postgres',
        port: 25060,
        dialectOptions: {
            ssl: {
                ca: fs.readFileSync(path.resolve("config", "ca-certificate.crt")),
                // key: fs.readFileSync(path.join(__dirname, 'ssl', 'client.key')),
                // cert: fs.readFileSync(path.join(__dirname, 'ssl', 'client.crt')),
            },
        }
    },
};