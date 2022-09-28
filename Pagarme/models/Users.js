const Sequelize = require('sequelize');

const db = require('./db');

const Users = db.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Product: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Payments_method: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Number: {
        type: Sequelize.INTEGER,
        limited: 16,
        allowNull: false,
    },
    Holder_document: {
        type: Sequelize.INTEGER,
        limited:11,
        allowNull: false,
    },
    CVV: {
        type: Sequelize.INTEGER,
        limited:3,
        allowNull: false,
    },
    Status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Code:{
        type: Sequelize.INTEGER,
        limited:10,
        allowNull: false,
    },
    Adress:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    Number_house: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Zip_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    City: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    State: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Country: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});

//Product.sync();
Users.sync({ alter: true});

module.exports = Users;