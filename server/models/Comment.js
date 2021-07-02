const sequelize = require('./db');
const { DataTypes } = require('sequelize');

module.exports = sequelize.define('Comment', {
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    toId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
