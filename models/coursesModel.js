const mongoose = require('mongoose');

const CoursesSchema = mongoose.Schema({ 
    title: {
        type: [String],
        required: [true, "el título es requerido"],
        unique: true,
        maxlength: [50, "nombre de bootcamp no mayor de 50 caracteres"]
    },
    description: {
        type: [String],
        maxlength: [100, "descripción de bootcamp no mayor de 100 caracteres"]
    },
    weeks: {
        type: Number,
        required: [true, "la semana es requerida"],
        max: [100, "semana no mayor de 100 semanas"]
    },
    tuition: {
        type: [String], 
        required: [true, "tuition es requerido"],
    },
    minimumSkil: {
        type: [String],
        required: [true, "minimumSkil es requerido"],
        enum: ["beginner", "intermediate", "advance"]
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Courses', CoursesSchema);
