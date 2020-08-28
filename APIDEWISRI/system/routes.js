'use strict';

module.exports = function (app) {
    var index = require('../controllers/controller');
    var userController = require('../controllers/user_controller');
    var getImage = require('./server')
    var plantController = require('../controllers/plant_controller');

    //Index Controller
    app.route('/')
        .get(index.index);


    // Image Route
    app.route('/storage/image/')
        .get(getImage.getImage)

    app.route('/storage/imagePost/')
        .get(getImage.getImagePost)


    //Auth
    app.route('/testMongo')
        .get(userController.index);

    app.route('/auth/registerUser')
        .post(userController.registerUser);

    app.route('/auth/getAllUsers')
        .get(userController.getAllUser);

    app.route('/auth/loginUser')
        .post(userController.loginUser);

    //Plant
    app.route('/plant/addPlant')
        .post(plantController.addPlant);
};