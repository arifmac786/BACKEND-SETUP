const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Content is required'],
        
    },
    complete: {
        type: Boolean,
        default: false
    },
     createdBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
     },
     subTodos:[ 
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'SubTodo'
        }
     ] // array of subtodo
}, { timestamps: true });

module.exports = mongoose.model("Todo", todoSchema);
