    const Admin = require('../controllers/admin.controllers');
    const User = require('../controllers/movieouttime.controller');
    const Movie = require('../controllers/movieouttime.controller');
    const Category  = require('../controllers/movieouttime.controller');
    // const  Category  = require('../controllers/controller.movie)
    //const { authenticate } = require('../config/jwt.config');
    module.exports = app => {
    app.post("/api/register", Admin.register);
    app.get("/api/logout", Admin.logout);
    app.get('/api/admin',Admin.getAdmin);
    app.post("/api/createuser",User.createUser);
    //app.post("/api/createcategory",Movie.createCategory);
    //app.get("/api/getAllCategories",Movie.allCategories);
    //app.get('/api/getCategory/:id',Movie.getOneCategory);
    }