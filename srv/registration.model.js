const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Registration = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    address_1: {
        type: String
    },
    address_2: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    phone: {
        type: String
    },
    optin_contact: {
        type: Number
    }
});

module.exports = mongoose.model('Registration', Registration, 'registrations');