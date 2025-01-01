const express = require('express')
const app = express()
const port = 3000

try{
    app.listen(port,()=>{
        console.log("Succesfully connected to ",port)
    })
}
catch{
    console.log("failed to connect")
}


app.get('/',(req,res)=>{
    res.send("hi")
})