const mongoose = require('mongoose');
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
const videoSchema = new mongoose.Schema({
 
  videoFile: {
    type:String, //cloudinary video url
    required: true,
  },
  thumbnail: {
    type: String, //cloudinary image url
    default: 'default-thumbnail.jpg',
  },
  title: {
    type: String,//cloudinary url
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  duration: {
    type: Number, //in seconds
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  isPublic: {
    type: Boolean,
    default: true, //public by default
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }


},{  timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model('Video', videoSchema);