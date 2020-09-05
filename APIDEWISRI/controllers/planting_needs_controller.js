PlantingNeeds = require('../models/planting_needs');
// User = require('../models/user_model');
// var response = require('../helpers/responseHelper');
// const planting_needs = require('../models/planting_needs');


exports.getAllPlantingNeeds = function (req, res) {
    PlantingNeeds.find({}, function (err, planting_needs) {
        res.json({
            data: planting_needs
        })
    });
}

exports.deletePlantingNeeds = function (req, res) {
    PlantingNeeds.remove({
        _id: req.params.plantingNeedsId
    }, function (err, planting_needs) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'PlantingNeeds deleted'
        });
    });
};

exports.addPlantingNeeds = function (req, res) {
    var planting_needs = new PlantingNeeds(req.body);
    planting_needs.save().then(docPlantingNeeds => {
        Plant.findByIdAndUpdate(
            req.body.owner_plantId,
            {
                $push: {
                    plantingNeeds: docPlantingNeeds._id
                }
            },
            {
                new: true,
                useFindAndModify: false
            }
            , function (error, results) {
                if (error) {
                    console.log(error);
                } else {
                    res.json({
                        status: 200,
                        data: planting_needs
                    })
                }
            })
    })
}

// exports.updatePlant = function (req, res) {

//     Plant.findById(req.params.plantId, function (err, plant) {
//         if (err)
//             res.send(err);
//         plant.variety = req.body.variety ? req.body.variety : plant.variety;
//         plant.comodity = req.body.comodity ? req.body.comodity : plant.comodity;

//         plant.save(function (error) {
//             if (error)
//                 res.json(error);
//             res.json({
//                 status: 200,
//                 message: 'Plant Info updated',
//                 data: plant
//             });
//         });
//     });
// };

exports.getPlantById = function (req,res) {
    Plant.findById(req.params.plantId, function (err, plant) {
        res.json({
            status: 200,
            data: plant
        })
    });
}

exports.getPlantingNeeds = function (req,res) {
    PlantingNeeds.find({owner_plantId: req.params.plantId}, function (err, planting_needs) {
        res.json({
            status: 200,
            data: planting_needs
        })
    }).populate('_idBibit').populate('_idPestisidaList').populate('_idPupukList').populate('_idBBMList')
}