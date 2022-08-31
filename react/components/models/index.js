const {user} = require('./user')
const {items} = require('./items')

items.belongsTo(user)
user.hasMany(items)

module.exports = {items, user};