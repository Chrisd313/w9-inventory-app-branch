// const {seed} = require('../server/seed')
// const express = require('express')
// const {itemsRt, userRt} = require('../../server/routers')
// const app = express()

// seed()


app.use(express.json())
app.use('/items, itemsRt')

