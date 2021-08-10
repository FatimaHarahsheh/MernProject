const mongoose = require('mongoose'),Schema = mongoose.Schema;
const CategorySchema = new mongoose.Schema({

    name: { type: String,
        required: [true, "Name is required"] 
    },

    Movies:[{ type: Schema.Types.ObjectId, ref: 'Movie' }]
}, { timestamps: true });


module.exports.Category = mongoose.model('Category', CategorySchema);