const {DataTypes, db} = require('../db') /* this might need to change depending on file path */
const {sequelize} = require('../db')


const User = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
});

module.exports = User;
