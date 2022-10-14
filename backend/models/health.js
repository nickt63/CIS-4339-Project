const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HealthSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
		type: Number,
      	required: true,
        unique: true
	},
    healthInsuranceStatus: {
        type: String,
        required: true
    },
    healthInsuranceProgram: {
        type: String
    },
    foodStampsStatus: {
        type: String,
        required: true
    },
    foodStampsAmount: {
        type: Number,
    },

}, 
    {
        collection: 'Health'
    });

module.exports = mongoose.model('Health', HealthSchema);
