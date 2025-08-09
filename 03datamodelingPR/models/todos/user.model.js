const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase:true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase:true
    },
    password:{
        type:String,
        required:[true,'password is required']
    }
  }, 
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
