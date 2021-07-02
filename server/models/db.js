const { sqlLogger } = require('../logger');
const { Sequelize } = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize(
    config.database.DataBaseName,
    config.database.rootName,
    config.database.password,
    {
        host: config.database.host,
        dialect:
            'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
        logging(msg) {
            sqlLogger.debug(msg);
        },
        define: {
            freezeTableName: true,
            paranoid: true
        }
    }
);

module.exports = sequelize;
