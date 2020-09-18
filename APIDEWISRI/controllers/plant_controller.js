Plant = require('../models/plant_model');
User = require('../models/user_model');
Journal = require('../models/journal_model');
var response = require('../helpers/responseHelper');
PlantingNeeds = require('../models/planting_needs');


exports.getAllPlant = function (req, res) {
    Plant.find({}, function (err, plants) {
        res.json({
            data: plants
        })
    }).populate("plantingNeeds")
    // .populate({ 
    //     path: "plantingNeeds", 
    //     model: 'plantingNeeds',
    //     populate:[
    //         '_idBBMList',
    //         '_idPupukList',
    //         '_idPestisidaList',

    //     ]
    // })
}

exports.deletePlant = function (req, res) {
    Plant.remove({
        _id: req.params.plantId
    }, function (err, plant) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Plant deleted'
        });
    });
};

exports.addPlant = function (req, res) {
    var plant = new Plant(req.body);

    var planting_needs = new PlantingNeeds();
    planting_needs.dateInput = req.body.dateInput;

    plant.save().then(docPlant => {
        Journal.findOneAndUpdate(
            {

                'inputDate': req.body.startDate,
                'owner_userId': req.body.owner_userId
            },
            {
                $push: {
                    plantList: docPlant._id
                },
            },
            function (error, results) {
                if (error) {
                    console.log(error);
                } else {
                    User.findByIdAndUpdate(
                        req.body.owner_userId,
                        {
                            $push: {
                                plantList: docPlant._id
                            }
                        },
                        {
                            new: true,
                            useFindAndModify: false
                        }
                        , function (err, allres) {
                            if (error) {
                                console.log(error);
                            }
                            planting_needs.owner_plantId = docPlant._id;
                            planting_needs.save().then(docPlantingNeeds => {
                                Plant.findByIdAndUpdate(
                                    docPlant._id,
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
                                                data: plant
                                            })
                                        }
                                    })
                            })

                        }
                    )
                }
            })
    })
}

exports.updatePlant = function (req, res) {

    Plant.findById(req.params.plantId, function (err, plant) {
        if (err)
            res.send(err);
        plant.variety = req.body.variety ? req.body.variety : plant.variety;
        plant.comodity = req.body.comodity ? req.body.comodity : plant.comodity;

        plant.save(function (error) {
            if (error)
                res.json(error);
            res.json({
                status: 200,
                message: 'Plant Info updated',
                data: plant
            });
        });
    });
};

exports.getPlantById = function (req, res) {
    Plant.findById(req.params.plantId, function (err, plant) {
        res.json({
            status: 200,
            data: plant
        })
    });
}