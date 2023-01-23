
require('../models/database')
const Category = require('../models/Category')



//Get page//
//Homepage

// exports.homepage = async(req, res) =>{
//     try{
//         const limitNumber = 5;
//         const categories = await Category.find({}).limit(limitNumber)
//         res.render('index', { title: 'Cooking Blog - Home', categories});

//     }catch(error){
//         res.status(500).send({message: error.message || "Error Occured"})
//     }
   
// }
exports.homepage = async(req,res)=>{
    res.render('index', {title:'Cooking Blog - Home'})
}

async function insertDummyCategoryData(){
   try {
       await Category.insertMany([
        {
            "name": "Thai",
            "image": "Image_4.jpg"
        },
        {
            "name": "American",
            "image": "Image_4.jpg"
        },
        {
            "name": "Chinese",
            "image": "Image_4.jpg"
        },
        {
            "name": "Mexican",
            "image": "Image_4.jpg"
        },
        {
            "name": "Japan",
            "image": "Image_4.jpg"
        },
        {
            "name": "Nigeria",
            "image": "Image_4.jpg"
        }
    ]);


   } catch(error){
     console.log('err', + error)

   }
}

insertDummyCategoryData()

