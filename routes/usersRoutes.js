
const express = require('express');



//definir rutas con la aplicasion principal
const router =express.Router()


//utilizar el ruteador para crear las rutas 




//1.seleccionar todos los users
router.get(('/'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"seleccionando todos los users"
        }
    )

})

//2.seleccionar el users cuyo id se pase por parametro 
router.get('/:id', (req,res)=>{

    usersId=req.params.id


return res.json(
    {
    success:true,
     msg:`seleccionando  users cuyo id es : ${usersId}`

    }
)


})





//3.crear  los users
router.post(('/'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"crear users"
        }
    )

})



//4. actulizar  users por id
router.put('/:id', (req,res)=>{

    usersId=req.params.id


return res.json(
    {
    success:true,
     msg:`actulizando users cuyo id es   : ${usersId}`

    }
)


})




//4. eliminar   users por id
router.delete('/:id', (req,res)=>{

    usersId=req.params.id


return res.json(
    {
    success:true,
     msg:`eliminando users cuyo id es   : ${usersId}`

    }
)


})










module.exports=router