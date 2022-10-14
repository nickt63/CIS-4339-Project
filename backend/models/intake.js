const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let IntakeSchema = new Schema({
    _id: {
       type: String,
        required: true,
        default: uuid.v1
    },
    clientID: {
        type: Number,
        required: true,
        unique: true
    },

    familyID: {
        type: Number,
        required: true,
        unique: true
    },

    startDate: {
        type: String,
        required: true
    },

    endDate: {
        type: String,
        required: true
    },
  }, {
    collection: 'Intake'
});

module.exports = mongoose.model('Intake', IntakeSchema)

//versionKey: false 

