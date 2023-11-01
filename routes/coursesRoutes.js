
const express = require('express');


const Courses= require("../models/coursesModel.js")

//definir rutas con la aplicasion principal
const router =express.Router()


//utilizar el ruteador para crear las rutas 



    






//1.seleccionar todos los courses
router.get(('/'),  async(req,res)=>{
//traer todos lo cursos de la base de datos 
const courses =await Courses.find()

    return res.json(
        {
            success:true,
           data:courses
        }
    )

})

//2.seleccionar el courses cuyo id se pase por parametro 
router.get('/:id', async (req,res)=>{

 const   coursesId=req.params.id
   //consultar lso bootcamps por id 
   const  courses= await Courses.findById(coursesId)


return res.json(
    {
    success:true,
     data:courses
    }
)


})





//3.crear  los courses
router.post(('/'),  async(req,res)=>{
    const newcourses= await Courses.create(req.body)


    return res.json(
        {
            success:true,
         data:newcourses
        }
    )

})



//4. actulizar  courses por id
router.put('/:id', async(req,res)=>{

    const coursesId=req.params.id



    updCourses=await Courses.findByIdAndUpdate(
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