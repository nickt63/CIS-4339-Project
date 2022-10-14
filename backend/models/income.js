const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let IncomeSchema = new Schema({
    _id: { 
		type: String, 
        default: uuid.v1 
	},
	clientID: {
		type: Number,
      	required: true,
        unique: true
	},
    headOfHouseholdStatus: {
        type: String,
        required: true
    },
    monthlyIncome: {
        type: Number,
        required: true
    },
    spousalSupport:{ 
        type: Number,
        required: true
    },
    workComp:{ 
        type: Number,
        required: true
    },
    childSupport:{ 
        type: Number, 
        required: true
    },
    tanf:{ 
        type: Number,
        required: true
    },
    ssi:{ 
        type: Number,
        required: true
    },
    unemployment:{ 
        type: Number,
        required: true
    },
    socialSecurity:{ 
        type: Number,
        required: true
    },
  }, {
    collection: 'Income'
});

module.exports = mongoose.model('Income', IncomeSchema)

//versionKey: false 
