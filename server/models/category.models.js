const mongoose = require('mongoose');

require("./movie.models")

const CategorySchema = new mongoose.Schema({
    name: { type: String ,
        required:[true,"Category name is required"],
        minlength:[3,'Category name should be at least 3 characters'],
},
    movies:[{type:mongoose.Schema.Types.ObjectId, ref: 'Movie' }]

}, { timestamps: true });

// module.exports.Category = mongoose.model('Category', CategorySchema);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;


// const mongoose = require('mongoose')
// require('./movie.models')

// const CategorySchema = new mongoose.Schema({

//     name: { type: String,
//         required: [true, "Name is required"] 
//     },

//     Movies:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
// }, { timestamps: true });


// module.exports.Category = mongoose.model('Category', CategorySchema);
