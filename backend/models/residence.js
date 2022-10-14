const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ResidenceSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    county: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    totalRent: {
        type: Number,
        required: true
    },

    utilityStatus: {
        type: String,
        required: true
    },
    subsidizedStatus: {
        type: String,
        required: true
    },
    isSingleParent: {
        type: String,
        required: true
    }
  }, {
    collection: 'Residence'
});

module.exports = mongoose.model('Residence', ResidenceSchema)

//versionKey: false 


