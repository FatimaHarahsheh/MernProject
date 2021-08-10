    const {Admin} = require('../models/admin.model')
    const bcrypt = require('bcrypt');
    const jwt = require("jsonwebtoken");

    module.exports.register = (req, res) => {
    
        Admin.create(req.body)
        .then(user => {
            const payload = {
                id: user._id
        
            };
            const userToken = jwt.sign(payload, process.env.SECRET_KEY);
            
            res.cookie("userToken", userToken, { httpOnly: true }).json({
                message: "This response has a cookie" , user : user , token: userToken
                });
                res.json({ msg: "success!", user: user , token: userToken });
        })
        .catch(err => res.json(err));
    }

    module.exports.getAdmin = (request, response) => {
        Admin.find({})
            .then(admin => response.json(admin))
            .catch(err => response.json(err))
    }
    module.exports.logout=(req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }