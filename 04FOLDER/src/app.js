const express = require('express');
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express();

app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true
}))

//preperation for data storing (like when barat aati hai to dulhan ke yaha uske intejam ke liye taiyari kiya jata hai)
app.use(express.json({limit:"16kb"})) //for json data
app.use(express.urlencoded({extended:true,limit:"16kb"}))    // when data coming from url
app.use(express.static("public"))     //images,static file storing

app.use(cookieParser())

module.exports = app;