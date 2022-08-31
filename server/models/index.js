const {User} = require('./User')
const {Items} = require('./Items')

// items.belongsTo(User)
// user.hasMany(Items)

module.exports = {Items, User};
