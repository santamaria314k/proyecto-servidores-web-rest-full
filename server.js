const express = require('express')


// crear el objetro de la aplicasion 


const app=express()

//url de prueva

app.get('/prueba',(req , res )=>{

    //ejemplo de response 
    res.send("Hola")

})

//crear las uris de los bootcamps
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================
//1.seleccionar todos los bootcamps
app.get(('/bootcamps'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"seleccionando todos los bootcamps"
        }
    )

})

//2.seleccionar el bootcamp cuyo id se pase por parametro 
app.get('/bootcamps/:id', (req,res)=>{

    bootcampId=req.params.id


return res.json(
    {
    success:true,
     msg:`seleccionando  bootcamp cuyo id es : ${bootcampId}`

    }
)


})





//3.crear  los bootcamps
app.post(('/bootcamps'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"crear bootcamp"
        }
    )

})



//4. actulizar  bootcamp por id
app.put('/bootcamps/:id', (req,res)=>{

    bootcampId=req.params.id


return res.json(
    {
    success:true,
     msg:`actulizando bootcamp cuyo id es   : ${bootcampId}`

    }
)


})




//4. eliminar   bootcamp por id
app.delete('/bootcamps/:id', (req,res)=>{

    bootcampId=req.params.id


return res.json(
    {
    success:true,
     msg:`eliminando bootcamp cuyo id es   : ${bootcampId}`

    }
)


})














//crear las uris de los courses
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================
//1.seleccionar todos los courses
app.get(('/courses'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"seleccionando todos los courses"
        }
    )

})

//2.seleccionar el courses cuyo id se pase por parametro 
app.get('/courses/:id', (req,res)=>{

    coursesId=req.params.id


return res.json(
    {
    success:true,
     msg:`seleccionando  courses cuyo id es : ${coursesId}`

    }
)


})





//3.crear  los courses
app.post(('/courses'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"crear courses"
        }
    )

})



//4. actulizar  courses por id
app.put('/courses/:id', (req,res)=>{

    coursesId=req.params.id


return res.json(
    {
    success:true,
     msg:`actulizando courses cuyo id es   : ${coursesId}`

    }
)


})




//4. eliminar   courses por id
app.delete('/courses/:id', (req,res)=>{

    coursesId=req.params.id


return res.json(
    {
    success:true,
     msg:`eliminando courses cuyo id es   : ${coursesId}`

    }
)


})













//crear las uris de los users
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================
//1.seleccionar todos los users
app.get(('/users'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"seleccionando todos los users"
        }
    )

})

//2.seleccionar el users cuyo id se pase por parametro 
app.get('/users/:id', (req,res)=>{

    usersId=req.params.id


return res.json(
    {
    success:true,
     msg:`seleccionando  users cuyo id es : ${usersId}`

    }
)


})





//3.crear  los users
app.post(('/users'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"crear users"
        }
    )

})



//4. actulizar  users por id
app.put('/users/:id', (req,res)=>{

    usersId=req.params.id


return res.json(
    {
    success:true,
     msg:`actulizando users cuyo id es   : ${usersId}`

    }
)


})




//4. eliminar   users por id
app.delete('/users/:id', (req,res)=>{

    usersId=req.params.id


return res.json(
    {
    success:true,
     msg:`eliminando courses cuyo id es   : ${usersId}`

    }
)


})











//crear las uris de los reviews
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================
//------------------------------------------------==================
//1.seleccionar todos los reviews
app.get(('/reviews'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"seleccionando todos los reviews"
        }
    )

})

//2.seleccionar el users cuyo id se pase por parametro 
app.get('/reviews/:id', (req,res)=>{

    reviewsId=req.params.id


return res.json(
    {
    success:true,
     msg:`seleccionando  users cuyo id es : ${reviewsId}`

    }
)


})





//3.crear  los reviews
app.post(('/reviews'),(req,res)=>{
    return res.json(
        {
            success:true,
             msg:"crear reviews"
        }
    )

})



//4. actulizar  reviews por id
app.put('/reviews/:id', (req,res)=>{

    reviewsId=req.params.id


return res.json(
    {
    success:true,
     msg:`actulizando reviews cuyo id es   : ${reviewsId}`

    }
)


})




//4. eliminar   reviews por id
app.delete('/reviews/:id', (req,res)=>{

    reviewsId=req.params.id


return res.json(
    {
    success:true,
     msg:`eliminando reviews cuyo id es   : ${reviewsId}`

    }
)


})














// definir el puerto del servidor 

const PUERTO= 4500

//DIFINIR EL SERVIDOR 

app.listen( PUERTO,console.log(`servidor ejecutando en ${ PUERTO } `) )
