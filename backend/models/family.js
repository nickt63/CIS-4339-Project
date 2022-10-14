const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FamilySchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
        type: Number,
        required: true,
        unique: true
    },
    familyMember: [{
        lastName: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        birthday: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        relation: {
            type: String,
            required: true
        },
        race: {
            type: String,
            required: true
        }
        
}]
}, 
    {
    collection: 'Family'
});

module.exports = mongoose.model('Family', FamilySchema)

//versionKey: false 
