const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmploymentSchema = new Schema({
    _id: {
          type: String,
          default: uuid.v1
    },
    clientID: {
        type: Number,
        required: true,
        unique: true
    },
    employmentStatus: {
        type: String,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    employer: {
        type: String
    },
    occupation: {
        type: String
    },
  }, {
    collection: 'Employment'
});

module.exports = mongoose.model('Employment', EmploymentSchema)

//versionKey: false 



