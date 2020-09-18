'use strict';

var response = require('../helpers/responseHelper');
var connection = require('../system/mongo_connection');
var modals = require('../helpers/responseHelper');

exports.index = function (req, res) {
    response.getData("Hello from the Node JS RESTful side!", res)
};

const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

const AdminBroMongoose = require('@admin-bro/mongoose');
const User = require('../models/user_model');
const Plant = require('../models/plant_model');
const Journal = require('../models/journal_model');
const BBM = require('../models/bbm_model');
const Pupuk = require('../models/pupuk_model');
const PlantingNeeds = require('../models/planting_needs');
const Pestisida = require('../models/pestisida_model');
const Bibit = require('../models/bibit_model');
const DailyJournal = require('../models/daily_journal_model');
const HasilPanenModel = require('../models/hasil_panen_model');

AdminBro.registerAdapter(AdminBroMongoose)

const AdminBroOptions = {
    resources: [User, Journal, DailyJournal, Plant, PlantingNeeds, Bibit, Pupuk, BBM, Pestisida, HasilPanenModel],
}
exports.adminBro = new AdminBro(AdminBroOptions)
// const router = AdminBroExpress.buildRouter(adminBro)

// exports.adminBro = new AdminBro({
//     databases: [],
//     rootPath: '/admin',
// })

exports.router = AdminBroExpress.buildRouter(this.adminBro)

// exports.getUserList = function (req,res) {
//     connection.query("SELECT * FROM user",
//     function (error,results) {
//         error ? console.log(error) : res.json(results)

//     })
// }