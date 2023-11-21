
const express = require('express');


const Courses= require("../models/coursesModel.js");
const { default: mongoose } = require('mongoose');

//definir rutas con la aplicasion principal
const router =express.Router()


//utilizar el ruteador para crear las rutas 



    






//1.seleccionar todos los courses
router.get(('/'),  async(req,res)=>{
//traer todos lo cursos de la base de datos 
const courses =await Courses.find()
    //--------scenario _: no hay COURSES EN MONGO en mongo
if (courses.length > 0) {
    // si hay courses 
    res.status(200).json({
        success:true,
        data:courses
    })
    
} else {
    //no hay courses 
    res.status(404).json({

        success:false,
        msg:"no hay courses"
    })

}


})

//2.seleccionar el courses cuyo id se pase por parametro 
router.get('/:id', async (req,res)=>{

 const   coursesId=req.params.id
try {
    if (!mongoose.Types.ObjectId.isValid(coursesId)) {
        return res.status(500).json({
       success:false,
       msg: "id invalido"

        })
    } else {
        
  //consultar lso bootcamps por id 
  const  courses= await Courses.findById(coursesId)

  if (!courses) {
    res.status(404).json({
        success:false,
        msg:"course no encontrado"
    })

  } else {
    return res.status(200).json({
        success:true,
        data:courses
    })
    
  }



    }
} catch (error) {
    res.status(500).json({
        success:false,
        msg:`Error no encontrado: ${error.message}`
    })




}


})










//3.crear  los courses
router.post(('/'),  async(req,res)=>{

    try {

        //guardar el bootcamp que viene del body
    const newCourses= await Courses.create(req.body)
    return res.status(201).json(
      {
          success:true,
           data:newCourses
      }
    )
       
    } catch (error) {
       
    res.status(500).json({
    success:false,
    msg:`Èrror encontrado: ${error.message}`
    
    })
    
    
    }
    
    })

//4. actulizar  courses por id
router.put('/:id', async(req,res)=>{

    const coursesId=req.params.id



   const updCourses=await Courses.findByIdAndUpdate(
        coursesId,
        req.body,
    
        {
            new:true,
        }
    
       )


return res.json(
    {
    success:true,
    data:updCourses
    }
)


})




//4. eliminar   courses por id
router.delete('/:id', async(req,res)=>{

    const  coursesId=req.params.id

    await Courses.findByIdAndDelete(coursesId)


return res.json(
    {
    success:true,
    data:[]

    }
)


})


module.exports=router