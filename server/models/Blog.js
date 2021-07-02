const sequelize = require('./db');
const { DataTypes } = require('sequelize');

module.exports = sequelize.define('Blog', {
    label: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    publishDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    browse: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    comment: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});
