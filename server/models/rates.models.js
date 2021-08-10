const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    movie_id: {
        type: String,
        required: [true, "First name is required"]
    },
    user_id: {
        type: String,
        required: [true, "Last name is required"]
    },
    rate: {
        type: Number,
        required: [true, "Phone Number is required"]
    },

}, { timestamps: true });




module.exports.User = mongoose.model('User', UserSchema);