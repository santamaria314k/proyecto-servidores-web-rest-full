const mongoose = require('mongoose');

const bcryptjs=require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "El nombre es requerido"],
        maxlength: [50, "Nombre no debe ser mayor de 50 caracteres"]
    },
    email: {
        type: String, 
        maxlength: [80, "Email no debe ser mayor de 80 caracteres"]
    },
    role: {
        type: String,
        enum:['user','admin','publisher']
       
    },
    password: {
        type: String,
        required: [true, "La contraseña es requerida"],
        maxlength: [20, "Contraseña  no debe ser mayor de 20 caracteres"]
    }
});



UserSchema.pre('save', async function(){

//generar una sal 
const sal = await bcryptjs.genSalt(10);

//encriptar la contraseña usando la sal 

//utilizar  la sal 
   this.password= await bcryptjs.hash(this.password,sal);
})


UserSchema.methods.compararPassword= async function(password){
    return await bcryptjs.compare(password,this.password)
}

module.exports = mongoose.model('User', UserSchema);