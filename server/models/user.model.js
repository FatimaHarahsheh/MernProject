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
    status: { type: Boolean, default: false }
}, { timestamps: true });




module.exports.User = mongoose.model('User', UserSchema);