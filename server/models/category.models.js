const mongoose = require('mongoose');
require("./movie.models")

const CategorySchema = new mongoose.Schema({
    name: { type: String ,
        required:[true,"Category name is required"],
        minlength:[2,'Category name should be at least 2 characters'],
},
    movies:[{type:mongoose.Schema.Types.ObjectId, ref: 'Movie' }]

}, { timestamps: true })


const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
