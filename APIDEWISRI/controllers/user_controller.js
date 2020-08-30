User = require('../models/user_model');
var response = require('../helpers/responseHelper');
const bcrypt = require('bcrypt');

exports.getAllUser = function (req, res) {
    User.find({}, function (err, users) {
        res.json({
            data: users
        })
    });
}

exports.registerUser = function (req, res) {

    var user = new User(req.body);
    var query = { 'email': req.body.email };
    User.find(query, function name(err, results) {
        if (err) {
            console.log(err);
        } else {
            results.length == 0 ?
                bcrypt.hash(req.body.password, 10, function (error, hash) {
                    user.password = hash;
                    if (error) {
                        console.log(error);
                    } else {
                        user.save(function (errorSave) {
                            if (errorSave) {
                                console.log(errorSave);
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
                :
                res.json({
                    'status': 400,
                    'message': 'Email telah ada',
                })
        }
    })
}

exports.loginUser = function (req, res) {
    var query = { 'email': req.body.email };
    User.find(query, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            result.length > 0 ?
                bcrypt.compare(req.body.password, result[0].password, function (err, same) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        same ?
                            res.json({
                                'status': 200,
                                'data': result[0],
                                'message': 'Login Success'
                            })
                            :
                            res.json({
                                'status': 400,
                                'message': 'Login Failed',
                            })
                    }
                })
                :
                res.json({
                    'status': 400,
                    'message': 'Login Failed',
                })
        }
    }).populate("journalList")
}