const mongoose = require('mongoose')


const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required:'This Field is required'
    },
    description:{
        type: String,
        required:'This Field is required'
    },
    email:{
        type: String,
        required:'This Field is required'
    },
    ingredients:{
        type: Array,
        required:'This Field is required'
    },
    category:{
        type: String,
        enum:['Thai','American', 'Chinese', 'Mexican','Indian'],
        required:'This Field is required'
    },
    image:{
        type: String,
        required:'This Field is required'
    },




}) 



module.exports = mongoose.model('Recipe', recipeSchema)