const express = require('express')
const app = express()
const path = require('path')
const publicDirectory = path.join(__dirname,"../public")
console.log(publicDirectory)
app.use(express.static(publicDirectory))

app.listen(process.env.PORT,()=>{
    console.log('Server started listening at port no '+ process.env.PORT)
})