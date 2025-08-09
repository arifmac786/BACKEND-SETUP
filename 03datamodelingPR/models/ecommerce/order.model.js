const mongoose = require('mongoose')

const orderItemsSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema(
    {
       orderPrice: {
           type: Number,
           required: true
       },
       customer: {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'User',
           required: true
       },
       orderItems: {
        type:[orderItemsSchema]
       },
       address: {
           type: String,
           required: true
       },
       status:{
              type: String,
              required: true,
              enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
              default: 'Pending'
       },
       paymentMethod: {
           type: String,
           required: true,
           enum: ['Cash on Delivery', 'Online Payment']
       },
    },
     { timestamps: true })

const Order = mongoose.model('Order', orderSchema)
module.exports = Order