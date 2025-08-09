const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase:true,
    index:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: {
    type: String,//cloudinary image url
    default: 'default.jpg',
    required: true,
  },
  coverImage: {
    type: String,//cloudinary image url
    default: 'default-cover.jpg',
  },
  watchHistory: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'video'
  }],
  refreshToken: {
    type: String,
  }


},{timestamps:true});

userSchema.pre('save',async function(next){
  if(!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password,10)
  next()
})

userSchema.methods.comparePassword = async function (password){
  return await bcrypt.compare(password , this.password)
} // give boolean value

userSchema.methods.generateAccessToken = function (){
  return jwt.sign(
    {
      _id:this._id,
      email:this.email,
      username:this.username, 
      fullname:this.fullname,
    },process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRES_IN}
  )
}
userSchema.methods.generateRefreshToken = function () {
  jwt.sign(
    {
      _id: this._id,
      
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
  );
}

module.exports = mongoose.model('User', userSchema);