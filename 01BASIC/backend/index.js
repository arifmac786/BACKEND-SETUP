const express = require('express')
const app = express()
 
require('dotenv').config()

app.get('/',(req,res)=>{
    res.send('welcome to home page')
})

app.get('/twitter',(req,res)=>{
    res.send('welcome in twitter page')
})
 
app.get('/login',(req,res)=>{
    res.send('<h1>please login </h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT}`);
    
})
