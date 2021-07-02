const sequelize = require('./db');
const { DataTypes } = require('sequelize');

module.exports = sequelize.define('Users', {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    motto: {
        type: DataTypes.STRING,
        allowNull: true
    },
    avator: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "BASE.jpg"
    }
});
