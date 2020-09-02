'use strict';

module.exports = function (app) {
    var index = require('../controllers/controller');
    var getImage = require('./server')

    var userController = require('../controllers/user_controller');
    var plantController = require('../controllers/plant_controller');
    var journalController = require('../controllers/journal_controller');

    //Index Controller
    app.route('/')
        .get(index.index);

    // Image Route
    app.route('/storage/image/')
        .get(getImage.getImage)

    app.route('/storage/imagePost/')
        .get(getImage.getImagePost)

    //Auth

    app.route('/auth/registerUser')
        .post(userController.registerUser);

    app.route('/auth/getAllUsers')
        .get(userController.getAllUser);

    app.route('/auth/loginUser')
        .post(userController.loginUser);

    app.route('/auth/updateUser/:userId')
        .put(userController.updateUser);


    //Plant
    app.route('/plant/addPlant')
        .post(plantController.addPlant);

    app.route('/plant/getAllPlant')
        .get(plantController.getAllPlant);

    app.route('/plant/updatePlant/:plantId')
        .put(plantController.updatePlant);

    app.route('/plant/deletePlant/:plantId')
        .delete(plantController.deletePlant);

    app.route('/plant/getPlantById/:plantId')
        .get(plantController.getPlantById);

    //Journal
    app.route('/journal/addJournal')
        .post(journalController.addJournal);

    app.route('/journal/updateJournal/:journalId')
        .put(journalController.updateJournal);

    app.route('/journal/getJournalById/:journalId')
        .get(journalController.getJournalById);


};