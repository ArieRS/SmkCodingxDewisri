'use strict';

var nodemailer = require('nodemailer');
exports.sendEmailFunc = function(emailUser, kode) {

    var transporter = nodemailer.createTransport('smtps://harlowshaffer@gmail.com:0897harlow@smtp.gmail.com')

    return transporter

}