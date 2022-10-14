const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WorkerSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
        type: Number,
        required: true,
        unique: true
    },
    workerID: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
  }, {
    collection: 'Worker'
});

module.exports = mongoose.model('Worker', WorkerSchema)

//versionKey: false 


