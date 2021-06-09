require('dotenv').config();

module.exports = {
    development: {
        username: process.env.POSTGRES_USERNAME || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres',
        database: process.env.POSTGRES_DB || 'online-exam',
        host: process.env.POSTGRES_HOSTNAME || 'localhost',
        dialect: 'postgres',
        seederStorage: 'sequelize'
    },
    test: {
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOSTNAME,
        dialect: 'postgres',
        seederStorage: 'sequelize'
    },
    production: {
        dialect: 'postgres',
        seederStorage: 'sequelize'
    },
};