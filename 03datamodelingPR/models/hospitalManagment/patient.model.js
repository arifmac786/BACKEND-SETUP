const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    diagnosedWith: {
        type: String,
        required: true
    },
    doctorAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    bloodGroup: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    medicalRecords: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicalRecord'
    }],
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    addmittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    contactNumber: {
        type: String,
        required: true,
        
    },
    photo: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Patient = mongoose.model('Patient', PatientSchema)
module.exports = Patient