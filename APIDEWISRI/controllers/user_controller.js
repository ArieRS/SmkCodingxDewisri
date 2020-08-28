User = require('../models/user_model');
var response = require('../helpers/responseHelper');
const bcrypt = require('bcrypt');

var user = new User();

exports.index = function (req, res) {
    response.getData("Hello from the Node JS RESTful side!", res);
}

exports.getAllUser = function (req, res) {
    User.find({}, function (err, users) {
        var userMap = {};

        users.forEach(function (user) {
            userMap[user._id] = user;
        });

        // res.send(userMap);
        res.json({
            data: userMap
        })
    });
}

exports.registerUser = function (req, res) {

    // user.journals = req.body.journals;

    var query = { 'email': req.body.email };
    // user.find(query).toArray(function (error, result) {
    //     if (error) throw error;
    //     console.log(result);
    // });
    // user.get().toArray(function (error, result) {
    //     if (error) console.log( error);
    //     console.log(result);
    // });
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = hash;
        user.name = req.body.name;
        user.phone = req.body.phone;
        user.avatar = req.body.avatar;
        user.isPremium = req.body.isPremium;
        user.coins = req.body.coins;
        user.userStatus = req.body.userStatus;
        if (err) {
            console.log(err);
        } else {
            user.save(function (error) {
                if (error) {
                    console.log(error);
                }
                else {
                    res.json({
                        status: 200,
                        data: user
                    })
                }
            })
        }
    })

}