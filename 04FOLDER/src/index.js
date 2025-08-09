 require("dotenv").config({path: "./.env"})
 const mongoose = require('mongoose')
 const { DB_NAME } = require('./constants');
const connectDB = require('./db/db');
 
 
 connectDB()
 















 /*
 const express = require('express')
 const app = express()
 ;(async ()=>{
  try{
   await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
   app.on("error" , (error)=>{
    console.log("ERROR",error);
    throw error
    
   })
   app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
    
   })

  }catch(error){
    console.error("ERROR",error)
    throw error
  }
 })()*/