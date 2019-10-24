const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const PORT = 4000;

let Registration = require('./registration.model');
const Validator = require('./validator');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/sweeps', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

router.route('/create-reg').post(function(req, res) {
    const data = req.body;
    let validator = new Validator;
    let errors = validator.getErrors({
        first_name: {
            type: 'text',
            value: data.first_name
        },
        last_name: {
            type: 'text',
            value: data.last_name
        },
        email: {
            type: 'email',
            value: data.email
        },
        email_confirm: {
            type: 'email_confirm',
            value: data.email_confirm
        },
        address_1: {
            type: 'text',
            value: data.address_1
        },
        address_2: {
            type: 'text',
            value: data.address_2,
            optional: true
        },
        city: {
            type: 'text',
            value: data.city
        },
        state: {
            type: 'text',
            value: data.state
        },
        zip: {
            type: 'text',
            value: data.zip
        },
        phone: {
            type: 'text',
            value: data.phone
        },
        optin_contact: {
            type: 'text',
            value: data.optin_contact
        }
    });

    if (errors != false) {
        res.status(200).json({errors: errors});
        return;
    }

    Registration.countDocuments({email: data.email}, function(err, count) {
        if (count) {
            res.status(200).json({navigate: 'already-entered'});
            return;
        }
        
        let reg = new Registration(data);
        reg.save().then(reg => {
            res.status(200).json({navigate: 'thank-you'});
        });    
    });
});

app.use('/sweeps', router);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});