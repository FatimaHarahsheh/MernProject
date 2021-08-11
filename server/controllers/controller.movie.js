const Category = require("../models/category.models");
const Movie = require("../models/movie.models");
const MovieCast = require("../models/cast.model");

// module.exports.addMovie = (req, res) => {
//     Movie.create(req.body)
//       .then( (newMovie) => res.json(newMovie ))
//       .catch((err) => res.json({ errorMessage: hi }));
//   };

module.exports.createCategory = (request, response) => {
  Category.create(request.body)
    .then((Category) => response.json(Category))
    .catch((err) => response.json(err));
};

module.exports.addMovie = (req, res, next) => {
  // console.log(request.file.originalname)
  var obj = {
    name: req.body.name,
    poster: req.body.poster,
    rating:req.body.rating,
    casts:req.body.casts
  }
  Movie.create(obj)
    .then((movie) => {
      Category.findOneAndUpdate(
        { name: req.body.category },
        { $addToSet: { movies: movie._id } },
        { new: true }
      )
        .populate("movies")
        // MovieCast.findOneAndUpdate(
        //   { name: req.body.category },
        //   { $addToSet: { movies: movie._id } },
        //   { new: true }
        // )
        //   .populate("movies")
        .then((created) => res.json(created));
      res.json(movie);
    })
    .catch((err) => console.log(err));
};

// module.exports.createBook = (request, response, next) => {
//   console.log(request.file.originalname)
//   var obj = {
//       name: request.body.name,
//       description: request.body.description,
//       url:request.body.url,
//       image: request.file.originalname,
//   }
//   Book.create(obj)
//   .then(book =>{
//       Category.findOneAndUpdate({name: request.body.category},{$addToSet:{books:book._id}}, {new:true}).populate('books')
//       .then(created => response.json(created))
//       response.json(book)
//   })
//   .catch(err => console.log(err))
// }

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

module.exports.getCategory = (req, res) => {
  Category.findOne({ _id: req.params.id })
    .then((category) => res.json(category))
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

module.exports.addCast = (req, res) => {
  MovieCast.create(req.body)
    .then((newCast) => res.json(newCast))
    .catch((err) => res.json({ errorMessage: hi }));
};

// module.exports.addCategory = (req, res) => {
//   Category.create(req.body)
//     .then((newCategory) => res.json(newCategory ))
//     .catch((err) => res.json({ errorMessage: hi }));
// };

// The method below is new
