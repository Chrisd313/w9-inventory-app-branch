const express = require('express')
const itemsRt = express.Router()
const {Items} = require('../models/')


// TEST
itemsRt.get('/', (req, res) => {
    res.send("It work's!")
})


// // Get All Items
// itemsRt.get('/getallitems', (req, res) => {
//     res.send(items)
// })


// // Get One Item
// itemsRt.get('/getitembytitle/:title', async (req, res) => {
//     // Get Items by title and return to all UPPERCASE
//     // let newString = req.params.title.toUpperCase()
//     // Then store the Item requested that matches the created string above
//     const requesteditem = await Item.findOne({where: {title: req.params.title}})

//     // Then value from requestedItem is stored in theItem variable below
//     let(title, price, description, category, image) = requesteditem
//     let theItem = {
//         title: title,
//         price: price,
//         description: description,
//         category: category,
//         image: image
//     }

//     res.send(theItem)
// })


module.exports = {itemsRt}