const mongoose = require('mongoose')


const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required:'This Field is required'
    },
   

}) 



module.exports = mongoose.model('Recipe', recipeSchema)