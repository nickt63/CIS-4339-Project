const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EducationSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
        type: Number,
        required: true,
        unique: true
    },

    school: {
        type: String
    },
    lastGrade: {
        type: String
    },
    graduationStatus: {
        type: String,
        required: true
    },
    degree: {
        type: String
    },
    certification: {
        type: String
    }
  }, {
    collection: 'Education'
});

module.exports = mongoose.model('Education', EducationSchema)

//versionKey: false 


