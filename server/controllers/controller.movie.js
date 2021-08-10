const Movie = require('../models/movie.models')

module.exports.addMovie = (req, res) => {
    Movie.create(req.body)
      .then((newMovie) => res.json(newMovie ))
      .catch((err) => res.json({ errorMessage: err }));
  };
  
  module.exports.allMovies = (req, res) => {
    Movie.find()
      .then((Movies) => res.json({ Movies: Movies }))
      .catch(err => res.status(400).json({ errorMessage: err }));
  }
  
  module.exports.movie = (req, res) => {
    Movie.find({_id:req.params.id})
      .then((Movie) => res.json(Movie))
      .catch(err => res.status(400).json({ errorMessage: err }));
  }
  
  module.exports.updateMovie = (req, res) => {
    Movie.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { runValidators: true }
    )
        .then(Movie => res.json(Movie))
        .catch(err => res.status.json({ message: 'Something went wrong', error: err }));
  }
  
  module.exports.deleteMovie = (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
  }