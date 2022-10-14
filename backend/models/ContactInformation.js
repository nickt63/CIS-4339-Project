const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactInformationSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
        type: Number,
        required: true,
        unique: true
    },
    homeNum: {
        type: String
    },

    cellNum: {
        type: String,
        required: true
    },

    personalEmail: {
        type: String,
        required: true
    },

    maritalStatus: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },

    priorityPopulation: {
        type: String,
        required: true
    },

  }, {
    collection: 'ContactInformation'
});

module.exports = mongoose.model('ContactInformation', ContactInformationSchema)

//versionKey: false 




