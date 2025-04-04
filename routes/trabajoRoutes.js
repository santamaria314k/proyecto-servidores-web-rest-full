const express = require('express');

const Trabajo= require("../models/trabajoModel.js");
const { default: mongoose } = require('mongoose');

//definir rutas con la aplicasion principal
const router =express.Router()


//utilizar el ruteador para crear las rutas 




//1.seleccionar todos los registros
router.get(('/'), async (req,res)=>{
    //traer  los registros en base de datos
    const trabajo=   await Trabajo.find()
    //--------scenario _: no hay registros en mongo
    if (trabajo.length > 0) {
        //si hay registros
        res.status(200).json({
            
            success:true,
            data:trabajo
        })
    }else{
  // no hay registros
  res.status(404).json({
            
    success:false,
    msg:"no hay registros"
})
    
    

}

})





//2.seleccionar el registro cuyo id se pase por parametro 


router.get('/:id',async (req,res)=>{

   const trabajoId=req.params.id
try {
    //scenario de que el registro sea inbalido(1,a)
    if(!mongoose.Types.ObjectId.isValid(trabajoId)){
return res.status(500).json({
    success:false,
    msg:"id invalido"
})

    }else{
        const  trabajo = await Trabajo.findById(trabajoId)

        if (!trabajo) {
            res.status(404).json({
                success:false,
                msg:"registro  no encontrado"
            })
        } else {
              return res.status(200).json(
            {
            success:true,
             data:trabajo
        
            }
        )

        }
      
    }


} catch (error) {
    res.status(500).json({
        success:false,
        msg:`Error encontrado: ${error.message}`
     }) 
}

    //consultar registro por id
 
})







//3.crear  los re  
router.post(('/'),  async (req,res)=>{

    try {

         //guardar el REGISTRO que viene del body
   const newTrabajo= await Trabajo.create(req.body)
   return res.status(201).json(
       {
           success:true,
            data:newTrabajo
       }
   )
        
    } catch (error) {
        
res.status(500).json({
success:false,
msg:`Èrror encontrado: ${error.message}`

})


    }

})





// //4. actulizar  registro por id

router.put(('/:id'),
        async (req, res) => {
            const trabajoId =  req.params.id   
            try {
               // registro id sea invalido
               if(!mongoose.Types.ObjectId.isValid(trabajoId)){
                   return res.status(500).json({
                       success: false,
                       msg: "Id del registro invalido"
                   })
               } else{
                   //Traerlo por id
                   const trabajo = await Trabajo.findByIdAndUpdate(trabajoId , 
                                                                    req.body,{
                                                                        new: true,
                                                                        runValidators: true
                                                                    })
                   if (!trabajo){
                       res.status(404).json({
                           success: false,
                           msg: "regsitro no encotrado"
                       })
                   } else {
                       return res.status(200).json({
                           success: true,
                           data: trabajo
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







//4. eliminar   regsitros por id
router.delete('/:id',async (req,res)=>{

  const  trabajoId=req.params.id
    
   await Trabajo.findByIdAndDelete(trabajoId)

return res.json(
    {
    success:true,
data:[]
    }
)


})


module.exports=router