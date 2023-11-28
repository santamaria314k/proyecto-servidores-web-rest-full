
const express = require('express');


//definir rutas con la aplicasion principal
const router =express.Router()

const Reviews= require("../models/ReviewsModel.js");
const { default: mongoose } = require('mongoose');

//utilizar el ruteador para crear las rutas 








//1.seleccionar todos los reviews
router.get(('/'), async (req,res)=>{
     //traer todos lo reviews de la base de datos 
     const reviews =await Reviews.find()
    
     if(reviews.length > 0){
        //si hay reviews
      res.status(200).json({
        success:true,
        data:reviews
      })

     }else{
        //no hay reviews
        res.status(404).json({
            success:false,
            msg:"no hay reviews"
        })
     }
    })




//2.seleccionar el reviews cuyo id se pase por parametro 
router.get('/:id', async (req,res)=>{

    const  reviewsId=req.params.id
    try {
        //scenarios de que el review sea invalido
        if (!mongoose.Types.ObjectId.isValid(reviewsId)) {
            return res.status(500).json({
                success:false,
                msg:"id invalido"
            })
        }else{
            const reviews=await Reviews.findById(reviewsId)
        
            if (!reviews) {
                res.status(404).json({
                    success:false,
                    msg:"review no encontrado"
                })
            } else {
                return res.status(200).json({
                    success:true,
                    data:reviews
                })
                
            }



        }
    } catch (error) {
        
        res.status(500).json({
            success:false,
            msg:`Error encontrado :${error.message}`
        })
    }
    
})



//3.crear  los reviews   
router.post(('/'),  async(req,res)=>{

try {

    const newreviews= await Reviews.create(req.body)


    return res.status(201).json(
        {
            success:true,
         data:newreviews
        }
    )


    
} catch (error) {
    res.status(500).json({
        success:false,
        msg:`Èrror encontrado: ${error.message}`
})
}

})






//4. actulizar  reviews por id
router.put('/:id', async(req,res)=>{

    const reviewsId=req.params.id

    try {
        
        if(!mongoose.Types.ObjectId.isValid(reviewsId)){
            return res.status(500).json({
                success: false,
                msg: "Id del review invalido"
            })
        } else{
            //Traerlo por id
            const reviews = await Reviews.findByIdAndUpdate(reviewsId , 
                                                             req.body,{
                                                                 new: true,
                                                                 runValidators: true
                                                             })
            if (!reviews){
                res.status(404).json({
                    success: false,
                    msg: "review no encotrado"
                })
            } else {
                return res.status(200).json({
                    success: true,
                    data: reviews
                })
            }
        }




    } catch (error) {
        res.status(500).json({
            success: false,
            msg: `Error encontrado ${error.message}`
        })
    }


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





