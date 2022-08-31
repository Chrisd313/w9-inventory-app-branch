const {DataTypes, db} = require('./db') /* this might need to change depending on file path */

const user = db.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
});

module.exports = {user};