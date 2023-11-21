
const express = require('express');


//definir rutas con la aplicasion principal
const router =express.Router()

const Reviews= require("../models/ReviewsModel.js")

//utilizar el ruteador para crear las rutas 








//1.seleccionar todos los reviews
router.get(('/'), async (req,res)=>{
     //traer todos lo reviews de la base de datos 
     const reviews =await Reviews.find()
    
     return res.json(
         {
             success:true,
            data:reviews
         }
     )
 
 })





//2.seleccionar el reviews cuyo id se pase por parametro 
router.get('/:id', async (req,res)=>{

    const  reviewsId=req.params.id
      //consultar lso reviews por id 
      const  reviews= await Reviews.findById(reviewsId)
   
   
   return res.json(
       {
       success:true,
        data:reviews
       }
   )
   
   
   })
   
   



//3.crear  los reviews
router.post(('/'),  async(req,res)=>{
    const newreviews= await Reviews.create(req.body)


    return res.json(
        {
            success:true,
         data:newreviews
        }
    )

})






//4. actulizar  reviews por id
router.put('/:id', async(req,res)=>{

    const reviewsId=req.params.id



   const updreviews=await Reviews.findByIdAndUpdate(
      reviewsId,
        req.body,
    
        {
            new:true,
        }
    
       )


return res.json(
    {
    success:true,
    data:updreviews
    }
)


})







//4. eliminar   reviews por id
router.delete('/:id', async(req,res)=>{

    const  reviewsId=req.params.id

    await Reviews.findByIdAndDelete(reviewsId)


return res.json(
    {
    success:true,
    data:[]

    }
)


})



module.exports=router





