Plant = require('../models/plant_model');
User = require('../models/user_model');
var response = require('../helpers/responseHelper');

exports.addPlant = function (req, res) {
    var plant = new Plant(req.body);
    plant.save().then(docPlant => {
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