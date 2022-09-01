const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const itemRemove = sequelize.define('itemRemove', {
    title:{

    }
})

function deleteSelected (){
    router.delete('/:title', async (req, res, next) =>{
        console.log('This has been deleted')
    try{
            await itemRemove.destroy({
            where:{
                title:req.params.title
            }
        })
    }catch (error) {
        next(error);
      }
})
}
