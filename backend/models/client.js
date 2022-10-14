const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema({
    _id: {
       type: String,
        default: uuid.v1
    },
    clientID: {
        type: Number,
        required: true,
        unique: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    middleInitial: {
        type: String,
        required: true
    },

    zipCode: {
        type: String
    },
    
    birthday: {
        type: Date,
        required: true
    },
    ssn: {
        type: String,
        required: true
    },
    
    gender: {
        type: String,
        required: true
    },
    driverLicense: {
        type: String,
        required: true       
    },

    raceEthnicity: {
        type: String,
    },
  }, {
    collection: 'Client'
});

module.exports = mongoose.model('Client', ClientSchema)

//versionKey: false 




