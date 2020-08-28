Plant = require('../models/plant_model');
var response = require('../helpers/responseHelper');

exports.addPlant = function (req,res) {
    var plant = new Plant();
    plant.plantName = req.body.plantName;
    plant.comodity = req.body.comodity;
    plant.startDate = req.body.startDate;
    plant.owner_userId = req.body.owner_userId;
    
    plant.save(function (err) {
        if (err) {
            console.log(err);
        }
        else{
            res.json({
                status: 200,
                data: plant
            })
        }
    })
}