const mongoose = require("mongoose");
const castSchema = new  mongoose.Schema({
  name: String,
  image: String,
});

  const Cast = mongoose.model("Cast",castSchema );
  module.exports = Cast;
