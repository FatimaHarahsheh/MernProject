const mongoose = require("mongoose");

const MovieCast = mongoose.Schema({
  name: String,
  image: String,
});


const MovieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    poster: {
      type: String,
    },
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
    cast: MovieCast,
    year: {
      type: Number,
    },
    rating: Number,
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
