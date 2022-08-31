const {DataTypes, db} = require('../db') /* this might need to change depending on file path */
const {sequelize} = require('../db')

const Items = sequelize.define('items', {
    title: DataTypes.STRING,
    price: DataTypes.NUMBER,
    Description: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
});

module.exports = {Items};
