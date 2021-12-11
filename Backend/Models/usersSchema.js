const mongoose = require('mongoose');

// user schema describing the contents of the document within this collection
const usersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, 'This field is required']
    },
    surname: {
        type: String,
        required: [true, 'This field is required']
    },
    email: {
        type: String,
        required: [true, 'This field is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'This field is required for security reasons']
    },
    age: {
        type: Number,
    },
    weight: {
        type: String,
    }

});

module.exports = mongoose.model('Users', usersSchema);