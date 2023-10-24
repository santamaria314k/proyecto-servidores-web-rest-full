
const express = require('express');



//definir rutas con la aplicasion principal
const router =express.Router()


//utilizar el ruteador para crear las rutas 










//1.seleccionar todos los courses
router.get(('/'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"seleccionando todos los courses"
        }
    )

})

//2.seleccionar el courses cuyo id se pase por parametro 
router.get('/:id', (req,res)=>{

    coursesId=req.params.id


return res.json(
    {
    success:true,
     msg:`seleccionando  courses cuyo id es : ${coursesId}`

    }
)


})





//3.crear  los courses
router.post(('/'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"crear courses"
        }
    )

})



//4. actulizar  courses por id
router.put('/:id', (req,res)=>{

    coursesId=req.params.id


return res.json(
    {
    success:true,
     msg:`actulizando courses cuyo id es   : ${coursesId}`

    }
)


})




//4. eliminar   courses por id
router.delete('/:id', (req,res)=>{

    coursesId=req.params.id


return res.json(
    {
    success:true,
     msg:`eliminando courses cuyo id es   : ${coursesId}`

    }
)


})


module.exports=router