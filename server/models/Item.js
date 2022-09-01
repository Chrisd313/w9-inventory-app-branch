const {Sequelize, DataTypes, db} = require('sequelize') /* this might need to change depending on file path */
const {sequelize} = require('../db')



const Item = sequelize.define('items', {
    title: DataTypes.STRING,
    price: DataTypes.NUMBER,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
});

module.exports = Item;
