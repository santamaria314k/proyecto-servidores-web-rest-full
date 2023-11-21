
const mongoose =require('mongoose')


const ReviewsSchema=mongoose.Schema({ 
    title:{
        type:String,
        required:[true,"el titulo es requerido"],
        maxlength:[50 ,"titulo de reviews no mayor de 50 caracteres "]
    } ,
    Comment:{
        type:String,
        maxlength:[1000 ,"comentario no mayor de 1000 caract "]

    },
    rating:{
        type:Number,
        required:[true,"el rating  es requerid0"],
        maxlength:[10 ,"rating  no mayor de 10 caracteres "]

    }


 });
 module.exports=mongoose.model('Reviews',ReviewsSchema)

