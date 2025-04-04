
const mongoose =require('mongoose')




const TrabajoSchema=mongoose.Schema({ 
    name:{
        type:String,
        required:[true,"el nombre es requerido"],
        maxlength:[50 ,"no mayor de 50 caracteres "]
    } ,

    lastName:{
        type:String,
        required:[true,"el apellido es requerido"],
        maxlength:[50 ,"no mayor de 50 caracteres "]
    } ,




    phone:{
        type:Number,
        max:[9999999999 ,"telefono   no mayor a 10 digitos "]

    },
   
    birthdate: {
        type: Date,
        validate: {
          validator: function(v) {
            return v <= new Date(); 
          },
          message: 'La fecha de nacimiento no puede ser una fecha futura'
        }
      },

      imgUrl:{
        type:String,
        required:[false,"la url es requerida¡???"],
        maxlength:[500,"no mayor de 500 caracteres "]
    } 


 })
 module.exports=mongoose.model('Trabajo',TrabajoSchema)