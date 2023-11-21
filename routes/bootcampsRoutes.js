const express = require('express');

const Bootcamp= require("../models/bootcampsModel.js")

//definir rutas con la aplicasion principal
const router =express.Router()


//utilizar el ruteador para crear las rutas 




//1.seleccionar todos los bootcamps
router.get(('/'), async (req,res)=>{
    //traer  los bootcamps en base de datos
    const bootcamps= await Bootcamp.find()
    return res.json(
        {
            success:true,
             data:bootcamps
        }
    )

})







//2.seleccionar el bootcamp cuyo id se pase por parametro 


router.get('/:id',async (req,res)=>{

   const bootcampId=req.params.id
    //consultar bootcamp po id
  const  bootcamp= await Bootcamp.findById(bootcampId)


return res.json(
    {
    success:true,
     data:bootcamp

    }
)


})







//3.crear  los bootcamps
router.post(('/'),  async (req,res)=>{

    //guardar el bootcamp que viene del body
   const newBootcamp= await Bootcamp.create(req.body)
    return res.json(
        {
            success:true,
             data:newBootcamp
        }
    )

})





//4. actulizar  bootcamp por id
router.put('/:id',  async(req,res)=>{

   const bootcampId=req.params.id
    
  const  updBootcamp=await Bootcamp.findByIdAndUpdate(
    bootcampId,
    req.body,

    {
        new:true,
    }

   )

return res.json(
    {
    success:true,
    data :updBootcamp
    }
)


})





//4. eliminar   bootcamp por id
router.delete('/:id',async (req,res)=>{

  const  bootcampId=req.params.id
    
   await Bootcamp.findByIdAndDelete(bootcampId)

return res.json(
    {
    success:true,
data:[]
    }
)


})


module.exports=router