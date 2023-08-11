const { Sequelize } = require('sequelize');
const dbConf = require('./config')
let sequelize;
if(process.env.NODE_ENV === "production") {
    console.log("here");
    sequelize = new Sequelize(dbConf.production.database, dbConf.production.username, dbConf.production.password, {
        host: dbConf.production.host,
        dialect: dbConf.production.dialect,
        port: dbConf.production.port
    });
}else{
    sequelize = new Sequelize(dbConf.development.database, dbConf.development.username, dbConf.development.password, {
        host: dbConf.development.host,
        dialect: dbConf.development.dialect,
    });
}


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch((error) => {
        closeComplete.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;