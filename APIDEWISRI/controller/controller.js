'use strict';

var response = require('../helper/responseHelper');
var connection = require('../system/connection');
var modals = require('../helper/responseHelper');

exports.index = function(req, res) {
    response.getData("Hello from the Node JS RESTful side!", res)
};

// exports.getUserList = function (req,res) {
//     connection.query("SELECT * FROM user",
//     function (error,results) {
//         error ? console.log(error) : res.json(results)

//     })
// }