const express = require('express');

const User= require("../models/usersModel.js")


const { default: mongoose } = require('mongoose');


//definir rutas con la aplicasion principal
const router = express.Router()


//utilizar el ruteador para crear las rutas 






//1.seleccionar todos los users



router.get(('/'), async (req,res)=>{
    //traer  los users en base de datos
   

   
    const users= await User.find()
 if (users.length > 0) {

    return res.status(200).json(
        {
            success:true,
             data:users
        }
    )
}else{
    res.status(404).json({
            
        success:false,
        msg:"no hay users"
    })
}


})


//2.seleccionar el user cuyo id se pase por parametro 



router.get('/:id',async (req,res)=>{

   const userId=req.params.id


try {
    
  //scenario de que el bootcamp sea inbalido(1,a)
  if(!mongoose.Types.ObjectId.isValid(userId)){
    return res.status(500).json({
        success:false,
        msg:"id invalido"
    })
    
        }else{
            const  user= await User.findById(userId)
    
            if (!user) {
                res.status(404).json({
                    success:false,
                    msg:"user no encontrado"
                })
            } else {
                  return res.status(200).json(
                {
                success:true,
                 data:user
            
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


})









//3.crear  los users

router.post(('/register'),  async (req,res)=>{



try {


    const newUser= await User.create(req.body)
    return res.status(201).json(
        {
            success:true,
             data:newUser
        }
    )

    
} catch (error) {
    res.status(500).json({
        success:false,
        msg:`Èrror encontrado: ${error.message}`
        
        })
}


})











    













//4. actulizar  users por id
router.put('/:id',  async(req,res)=>{

   const userId=req.params.id
    


   try {
    

    if(!mongoose.Types.ObjectId.isValid(userId)){
        return res.status(500).json({
            success: false,
            msg: "Id del user invalido"
        })
    } else{
        //Traerlo por id
        const user = await User.findByIdAndUpdate(userId , 
                                                         req.body,{
                                                             new: true,
                                                             runValidators: true
                                                         })
        if (!user){
            res.status(404).json({
                success: false,
                msg: "user no encotrado"
            })
        } else {
            return res.status(200).json({
                success: true,
                data: user
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





//4. eliminar   users por id
router.delete('/:id',async (req,res)=>{

   const userId=req.params.id
    
   await User.findByIdAndDelete(userId)

return res.json(
    {
    success:true,
data:[]
    }
)


})

















//ruta para el login
router.post('/login', async (req,res)=>{

    // const email= req.body.email
    //     const password= req.body.password
    
    try {
    
        const{email,password}=req.body
    
        //buscar el usario al que corersponda el email
    const user= await User.findOne({email})
    
    if (!user) {
        res.status(401).json({
            success:false,
            msg:"no existe el e usario"
        })
    
    
    } else {
        

        const isMatch= await user.compararPassword(password)
        if (!isMatch) {
            res.status(401).json({
                success:false,
                msg:"credenciales invalidas"
            })
        }else{
            res.status(200).json({
                success:true,
                msg:"usariuo logueado correctamente"
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
    







module.exports=router











