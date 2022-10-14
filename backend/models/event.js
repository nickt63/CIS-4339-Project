//EventSchema
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    const EventSchema = new Schema({
        _id: {
            type: String,
            default: uuid.v1
        },
        clientID: {
            type: Number,
            required: true,
            unique: true
        },
        eventDescription: {
            type: String
        },
    
        eventDate: {
            type: String
        },
    
        eventAddress: {
            type: String
        },
    
        eventZip: {
            type: Number
        },
    
        shortNotes: {
            type: String,
            required:true
        },
    
        workerID: {
            type: Number,
            required: true
        },
        
        clients: 
            [{type: String, ref: 'Clients'}]
            //type: Array, ref: 'Clients'
        }
        );
    
        module.exports = mongoose.model('Event', EventSchema);
