const express = require('express');

const Bootcamp= require("../models/bootcampsModel.js");
const { default: mongoose } = require('mongoose');

//definir rutas con la aplicasion principal
const router =express.Router()


//utilizar el ruteador para crear las rutas 




//1.seleccionar todos los bootcamps
router.get(('/'), async (req,res)=>{
    //traer  los bootcamps en base de datos
    const bootcamps=   await Bootcamp.find()
    //--------scenario _: no hay bootcamps en mongo
    if (bootcamps.length > 0) {
        //si hay bbotcamps
        res.status(200).json({
            
            success:true,
            data:bootcamps
        })
    }else{
  // no hay bootcamps
  res.status(404).json({
            
    success:false,
    msg:"no hay bootcamps"
})
    
    

}

})





//2.seleccionar el bootcamp cuyo id se pase por parametro 


router.get('/:id',async (req,res)=>{

   const bootcampId=req.params.id
try {
    //scenario de que el bootcamp sea inbalido(1,a)
    if(!mongoose.Types.ObjectId.isValid(bootcampId)){
return res.status(500).json({
    success:false,
    msg:"id invalido"
})

    }else{
        const  bootcamp= await Bootcamp.findById(bootcampId)

        if (!bootcamp) {
            res.status(404).json({
                success:false,
                msg:"bootcamp no encontrado"
            })
        } else {
              return res.status(200).json(
            {
            success:true,
             data:bootcamp
        
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

    //consultar bootcamp po id
 
})







//3.crear  los bootcamps  
router.post(('/'),  async (req,res)=>{

    try {

         //guardar el bootcamp que viene del body
   const newBootcamp= await Bootcamp.create(req.body)
   return res.status(201).json(
       {
           success:true,
            data:newBootcamp
       }
   )
        
    } catch (error) {
        
res.status(500).json({
success:false,
msg:`Èrror encontrado: ${error.message}`

})


    }

})





// //4. actulizar  bootcamp por id

router.put(('/:id'),
        async (req, res) => {
            const bootcapmId =  req.params.id   
            try {
               // bootcapm id sea invalido
               if(!mongoose.Types.ObjectId.isValid(bootcapmId)){
                   return res.status(500).json({
                       success: false,
                       msg: "Id del bootcapm invalido"
                   })
               } else{
                   //Traerlo por id
                   const bootcamp = await Bootcamp.findByIdAndUpdate(bootcapmId , 
                                                                    req.body,{
                                                                        new: true,
                                                                        runValidators: true
                                                                    })
                   if (!bootcamp){
                       res.status(404).json({
                           success: false,
                           msg: "bootcapm no encotrado"
                       })
                   } else {
                       return res.status(200).json({
                           success: true,
                           data: bootcamp
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