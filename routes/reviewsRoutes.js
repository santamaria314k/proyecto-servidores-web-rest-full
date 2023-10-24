
const express = require('express');


//definir rutas con la aplicasion principal
const router =express.Router()


//utilizar el ruteador para crear las rutas 




//1.seleccionar todos los reviews
router.get(('/'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"seleccionando todos los reviews"
        }
    )

})

//2.seleccionar el reviews cuyo id se pase por parametro 
router.get('/:id', (req,res)=>{

    reviewsId=req.params.id


return res.json(
    {
    success:true,
     msg:`seleccionando  reviews cuyo id es : ${reviewsId}`

    }
)


})





//3.crear  los reviews
router.post(('/'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"crear reviews"
        }
    )

})



//4. actulizar  reviews por id
router.put('/:id', (req,res)=>{

    reviewsId=req.params.id


return res.json(
    {
    success:true,
     msg:`actulizando reviews cuyo id es   : ${reviewsId}`

    }
)


})




//4. eliminar   reviews por id
router.delete('/:id', (req,res)=>{

    reviewsId=req.params.id


return res.json(
    {
    success:true,
     msg:`eliminando reviews cuyo id es   : ${reviewsId}`

    }
)


})







module.exports=router

