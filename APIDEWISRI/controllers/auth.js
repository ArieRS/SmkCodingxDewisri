'use strict';

var response = require('../helpers/responseHelper');
var connection = require('../system/mongo_connection');
var Hashing = require('../helpers/hashHelper');
var mailerhelper = require('../helpers/mailerHelper');
const bcrypt = require('bcrypt');

exports.index = function(req, res) {
    response.getData("Hello from the Node JS RESTful side!", res)
};

exports.testHash = function(req, res) {
    var pass = req.body.password;
    var newPass = Hashing.encryptPassword(pass);
    response.getData(newPass, res);
};

exports.userRegister = function(req, res) {
    var request = req.body;
    var email = request.email;
    var pass = request.password;
    var nama = request.nama;

    connection.query("SELECT * FROM tabel_user WHERE email = ?", [email],
        function(err, results) {
            if (err) {
                console.log(err);
            } else {
                results.length < 0 ?
                    bcrypt.hash(pass, 10, function(err, hash) {
                        if (err) {
                            console.log(err);
                        } else {
                            connection.query(
                                "INSERT INTO tabel_user (nama, password, email, isVerified) VALUES(?,?,?,0)", [nama, hash, email],
                                function(err, rows) {
                                    if (err) {
                                        res.json({
                                            'status': false,
                                            'message': 'Register Failed'
                                        })
                                    } else {
                                        res.json({
                                            'status': 200,
                                            'message': 'Register Success'
                                        })
                                    }
                                }
                            )
                        }
                    })

                :
                res.json({
                    'status': 0,
                    'message': 'Email telah ada',
                    'mail': email,
                })
            }
        }
    )
}

exports.userLogin = function(req, res) {
    var request = req.body;
    var email = request.email;
    var pass = request.password;

    connection.query("SELECT * FROM tabel_user WHERE email = ?", [email],
        function(err, results) {
            if (err) {
                console.log(err);
            } else {
                results.length > 0 ?
                    bcrypt.compare(pass, results[0].password, function(err, same) {
                        if (err) {
                            console.log(err);
                        }
                        if (same) {
                            res.json({
                                'status': 200,
                                'data': results[0],
                                'message': 'Login Success'
                            })
                        } else {
                            res.json({
                                'status': 400,
                                'message': 'Login Failed',
                            })
                        }
                    })

                :
                res.json({
                    'status': 0,
                    'message': 'Login Failed',
                })
            }
        }
    )
}

exports.updateProfile = function(req, res) {
    var request = req.body;
    var email = request.email;
    var pass = request.password;
    var nama = request.nama;

    pass != undefined ?
        bcrypt.hash(pass, 10, function(err, hash) {
            if (err) {
                res.json({
                    'status': 400,
                    'message': 'Update Failed'
                })
            } else {
                connection.query("UPDATE tabel_user SET password = ?, nama = ? WHERE email = ?", [hash, nama, email],
                    function(error, results) {
                        if (error) {
                            console.log(error);
                        } else {
                            res.json({
                                'status': 200,
                                'message': 'Update Success'
                            })
                        }
                    }
                )
            }
        }) :
        connection.query("UPDATE tabel_user SET nama = ? WHERE email = ?", [nama, email],
            function(error, results) {
                if (error) {
                    console.log(error);
                } else {
                    res.json({
                        'status': 200,
                        'message': 'Update Success'
                    })
                }
            }
        )
}