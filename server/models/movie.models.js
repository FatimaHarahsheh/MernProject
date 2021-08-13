const mongoose = require("mongoose");

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
    trailer: {
      type: String,
    },
    year: {
      type: Number,
    },
    rating:{
      type: Number,
    },

    numberOfRating: {
      type: Number,
    },
    averageofrating:{
      type: Number,
    }
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
