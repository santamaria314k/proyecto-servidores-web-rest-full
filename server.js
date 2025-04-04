const express = require('express')

const dotenv = require('dotenv')

const colors=require('colors')

const connectDB =require('./config/db.js')

// crear el objetro de la aplicasion 
   

const app=express()

//ejecutar connection a db 


//dependencia de formateo  body

app.use(express.json())

connectDB()

//configuracion

dotenv.config({
path:'./config/.env'

})


//url de prueva

app.get('/prueba',(req , res )=>{

    //ejemplo de response 
    res.send("Hola")

})








const trabajoRoutes = require('./routes/trabajoRoutes.js')




//crear las uris del trabajo
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================



//uri de trabajo
  

app.use('/trabajo',trabajoRoutes)









//crear las uris de los users
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================

app.use('/auth',usersRoutes)



//crear las uris de los reviews
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================
app.use('/reviews',reviewsRoutes)






// definir el puerto del servidor 




const puerto = process.env.puerto 

//DIFINIR EL SERVIDOR 

app.listen( puerto,console.log(`servidor ejecutando en ${ puerto } `.bgBlue.white) )



