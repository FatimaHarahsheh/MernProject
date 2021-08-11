const mongoose = require("mongoose");
const MovieCastS = new  mongoose.Schema({
    name: String,
    image: String,
  });
  const MovieCast = mongoose.model("Cast",MovieCastS );
  module.exports = MovieCast;
