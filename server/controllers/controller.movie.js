const Category = require("../models/category.models");
const Movie = require("../models/movie.models");

//Movies controllers
module.exports.addMovie = (req, res, next) => {
  var obj = {
    name: req.body.name,
    poster: req.body.poster,
    rating:req.body.rating,
    images: req.body.images,
    description:req.body.description,
    language:req.body.language,
    trailer:req.body.trailer,
    year:req.body.year,
    rating:req.body.rating,
    numberOfRating:req.body.numberOfRating,
    averageofrating:req.body.averageofrating
  }
  Movie.create(obj)
    .then((movie) => {
      Category.findOneAndUpdate(
        { name: req.body.category },
        { $addToSet: { movies: movie._id } },
        { new: true }
      )
        .populate("movies")
        .then((created) => res.json(created));
      res.json(movie);
    })
    .catch((err) => console.log(err));
};

module.exports.allMovies = (req, res) => {
  Movie.find()
    .then((Movies) => res.json({ Movies: Movies }))
    .catch((err) => res.status(400).json({ errorMessage: err }));
};

module.exports.movie = (req, res) => {
  Movie.findOne({ _id: req.params.id })
    .then((specificProduct) => res.json(specificProduct))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

module.exports.updateMovie = (req, res) => {
  Movie.findOneAndUpdate({ _id: req.params.id }, req.body, {
    runValidators: true,
  })
    .then((Movie) => res.json(Movie))
    .catch((err) =>
      res.status.json({ message: "Something went wrong", error: err })
    );
};

module.exports.deleteMovie = (req, res) => {
  Movie.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

// category controllers
module.exports.createCategory = (request, response) => {
  Category.create(request.body)
    .then((Category) => response.json(Category))
    .catch((err) => response.json(err));
};

module.exports.getCategory = (req, res) => {
  Category.findOne({ _id: req.params.id })
    .then((category) => res.json(category))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

module.exports.getCategoryMovies = (request, response) => {
  Category.findOne({name:request.params.name}).populate('movies')
      .then(movies => response.json(movies))
      .catch(err => response.status(400).json(err))
}

module.exports.allCats = (req, res) => {
  Category.find()
    .then((Movies) => res.json(Movies))
    .catch((err) => res.status(400).json({ errorMessage: err }));
};