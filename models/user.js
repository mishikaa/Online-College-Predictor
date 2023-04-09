const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    userType: {
        enum: ['admin', 'administrator', 'visitor']
    }
});

module.exports = mongoose.model('User', UserSchema);