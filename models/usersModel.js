const mongoose = require('mongoose');

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
        required: [true, "El rol es requerido"],
        maxlength: [50, "El rol  no debe ser mayor de 50 caracteres"]
    },
    password: {
        type: String,
        required: [true, "La contraseña es requerida"],
        maxlength: [20, "Contraseña  no debe ser mayor de 20 caracteres"]
    }
});

module.exports = mongoose.model('User', UserSchema);