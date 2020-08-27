'use strict';

module.exports = function(app) {
    var index = require('../controller/controller');
    var getImage = require('./server')
    var authController = require('../controller/auth');

    //Index Controller

    app.route('/')
        .get(index.index);

    // app.route('/getUsers')
    //     .get(index.getUserList)

    //showing image

    app.route('/storage/image/')
        .get(getImage.getImage)

    app.route('/storage/imagePost/')
        .get(getImage.getImagePost)

    //Auth

    app.route('/testPassword')
        .post(authController.testHash);

    app.route('/auth/userRegister')
        .post(authController.userRegister);

    app.route('/auth/userLogin')
        .post(authController.userLogin);

    app.route('/auth/updateProfile')
        .post(authController.updateProfile);
};