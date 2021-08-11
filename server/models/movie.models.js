const mongoose = require("mongoose");
// const User = require('./user.model')
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
      images:[String],
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
    rating: {
    type:Number,
    defult:0
    },
    numberOfrating: {
       type:Number,
       defult:0
    }
    

  },
  { timestamps: true }


);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
