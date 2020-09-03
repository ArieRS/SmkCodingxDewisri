PlantingNeeds = require('../models/planting_needs');
Pupuk = require('../models/pupuk_model');
// User = require('../models/user_model');
// var response = require('../helpers/responseHelper');


exports.getAllPupuk = function (req, res) {
    Pupuk.find({}, function (err, pupuk) {
        res.json({
            data: pupuk
        })
    });
}

exports.deletePupuk = function (req, res) {
    Pupuk.remove({
        _id: req.params.pupukId
    }, function (err, pupuk) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Pupuk deleted'
        });
    });
};

exports.addPupuk = function (req, res) {
    var pupuk = new Pupuk(req.body);
    pupuk.save().then(docPupuk => {
        PlantingNeeds.findByIdAndUpdate(
            req.body.owner_plantingNeedsId,
            {
                $push: {
                    _idPupukList: docPupuk._id
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
                        data: pupuk
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

exports.getPupukById = function (req, res) {
    Pupuk.findById(req.params.pupukId, function (err, pupuk) {
        res.json({
            status: 200,
            data: pupuk
        })
    });
}