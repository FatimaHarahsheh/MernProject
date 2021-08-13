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
    casting: {
      actorone:{ type:String},
      actortwo:{ type:String},
      actorthree:{ type:String},
      actorfour:{ type:String},
      actorfive:{ type:String},
      castimg1:{type:String},
      castimg2:{type:String},
      castimg3:{type:String},
      castimg4:{type:String},
      castimg5:{type:String},
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
