const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const Product = require('./models/productmodel')
const mongoosse = require('mongoose')
// let database = []
// let counter = 100

app.use(bodyParser.json())



app.get('/',(req,res)=>{
    res.send("hi")
})

app.post('/product',async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


mongoosse
.connect('mongodb+srv://Ex0TiiC:Sunsun240205@nodelearn.9kus5.mongodb.net/nodeapi?retryWrites=true&w=majority&appName=Nodelearn')
.then(()=>{
    console.log("connected to mongoDB")

    app.listen(port,()=>{
        console.log("Succesfully connected to port",port)})


}).catch((error)=>{
    console.log(error)
})



// app.post('/regis',(req,res)=>{
//     try {
//         data = req.body
//         const regisdata = {
//             id : counter,
//             user: data.user,
//             password: data.password
//         }
//         if (regisdata.password.length <8){
//             res.status(404).json({error:'Password must contain more than 8 characters'})
//             console.log("Registeration failed")
//             return
//         }

//         database.push(regisdata)
//         res.status(200).json({status:"Registeration completed"})
//         console.log("Registeration Completed")

//     }

//     catch{
//         res.status(404).json({error:'An error occured'})
//         console.log("Registeration failed")
//     }
//     console.log(database)
// })