 require("dotenv").config({path: "./.env"})
 const mongoose = require('mongoose')
 const { DB_NAME } = require('./constants');
const connectDB = require('./db/db');
const app = require("./app")
 
 
 connectDB()
 .then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`App is listening on port ${process.env.PORT || 5000}`);
  });
  console.log("Database connection SUCCESSFUL");
  app.on("error", (error) => {
    console.error("ERROR", error);
    throw error;
  });
 })
 .catch((error) => {
   console.error("Database connection  FAILED:", error);
   process.exit(1);
 });
 















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