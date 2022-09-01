const express = require("express");
const router = express.Router();
const {itemsRt} = require('./items')
const {userRt} = require('./user')

router.use('/items', require('./items'));

module.exports = router