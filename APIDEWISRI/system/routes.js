'use strict';

module.exports = function(app) {
    var index = require('../controllers/controller');
    var userController = require('../controllers/user_controller');
    var getImage = require('./server')
    var authController = require('../controllers/auth');
    var plantController = require('../controllers/plant_controller');

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
    
    //Test Using Mongo
    app.route('/testMongo')
        .get(userController.index);
    
    app.route('/auth/registerUser')
        .post(userController.registerUser);
    
    app.route('/auth/getAllUsers')
        .get(userController.getAllUser);
    
    //Plant
    app.route('/plant/addPlant')
        .post(plantController.addPlant);
};