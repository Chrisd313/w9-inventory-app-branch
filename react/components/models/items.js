const {DataTypes, db} = require('./db') /* this might need to change depending on file path */

const items = db.define('items', {
    title: DataTypes.STRING,
    price: DataTypes.NUMBER,
    Description: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
});

module.exports = {items};