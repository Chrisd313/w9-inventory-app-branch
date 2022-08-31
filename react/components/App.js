const express = require('express')
const {db} = require('../db')
const app = express()
const {Items} = require('../models')
const {itemsRt} = require('../route')


app.use(express.json())
app.use('/items, itemsRt')

// does this work!