const {items} = require('./seedData.js')
const {user} = require('./seedData.js')

const {sequelize} = require('./db');

const {Items} = require('./models');
const {User} = require('./models');


const seed = async () => {

        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(items.map(items => Items.create(items)));
        await Promise.all(user.map(user => User.create(user)));
}


seed();