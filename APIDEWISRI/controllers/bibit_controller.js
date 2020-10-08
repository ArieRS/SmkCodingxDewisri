PlantingNeeds = require('../models/planting_needs');
Bibit = require('../models/bibit_model');
// User = require('../models/user_model');
// var response = require('../helpers/responseHelper');


exports.getAllBibit = function (req, res) {
    Bibit.find({}, function (err, bibit) {
        res.json({
            data: bibit
        })
    });
}

exports.deleteBibit = function (req, res) {
    Bibit.remove({
        _id: req.params.bibitId
    }, function (err, bibit) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Bibit deleted'
        });
    });
};

exports.addBibit = function (req, res) {
    var bibit = new Bibit(req.body);
    bibit.save().then(docBibit => {
        PlantingNeeds.findByIdAndUpdate(
            req.body.owner_plantingNeedsId,
            {
                $push:{
                    _idBibit: docBibit._id
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
                        data: bibit
                    })
                }
            })
    })
}

// exports.updateBibit = function (req, res) {

//     Bibit.findById(req.params.bibitId, function (err, bibit) {
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

exports.getBibitById = function (req,res) {
    Bibit.findById(req.params.bibitId, function (err, bibit) {
        res.json({
            status: 200,
            data: bibit
        })
    });
}