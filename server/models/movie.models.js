const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("./cast.model");
// const User = require('./user.model')



const MovieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    poster: {
      type: String,
    },
    images: [String],
    description: {
      type: String,
    },
    language: {
      type: String,
    },
    genre: [String],
    trailer: {
      type: String,
    },
    // cast:{type: Schema.Types.ObjectId,ref:'Cast'},
    casts: [castSchema],
    year: {
      type: Number,
    },
    rating: {
      type: Number,
      default: 0
    },
    numberOfrating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
