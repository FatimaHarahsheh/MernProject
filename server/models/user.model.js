const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone Number is required"]
    },
    numberOfTickets: {
        type: Number,
        required: [true, "Number of tickets is required"],
    },

    status: { type: Boolean, default: false }
}, { timestamps: true });




module.exports.User = mongoose.model('User', UserSchema);