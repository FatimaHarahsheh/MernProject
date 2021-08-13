const MC = require('../controllers/controller.movie');

module.exports = (app) => {
    app.post('/api/movie/new',MC.addMovie);
    app.post('/api/category/new',MC.createCategory );
    app.get('/api/movies',MC.allMovies);
    app.get('/api/topmovies',MC.topMovies);
    app.get('/api/movie/:id',MC.movie);
    app.put('/api/edit/:id',MC.updateMovie);
    app.delete('/api/delete/:id',MC.deleteMovie);
    app.get('/api/category/:id',MC.getCategory);
    app.get('/api/movies/:name', MC.getCategoryMovies);
    // app.get('/api/categor/:name', MC.getCategoryMovies);
}