PlantingNeeds = require('../models/planting_needs');
BBM = require('../models/bbm_model');
// User = require('../models/user_model');
// var response = require('../helpers/responseHelper');


exports.getAllBBM = function (req, res) {
    BBM.find({}, function (err, bbm) {
        res.json({
            data: bbm
        })
    });
}

exports.deleteBBM = function (req, res) {
    BBM.remove({
        _id: req.params.bbmId
    }, function (err, bbm) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'BBM deleted'
        });
    });
};

exports.addBBM = function (req, res) {
    var bbm = new BBM(req.body);
    bbm.save().then(docBBM => {
        PlantingNeeds.findByIdAndUpdate(
            req.body.owner_plantingNeedsId,
            {
                $push:{
                    // needs:{ 
                        _idBBMList: docBBM._id,
                    // }
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
                        data: bbm
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

exports.getBBMById = function (req,res) {
    BBM.findById(req.params.bbmId, function (err, bbm) {
        res.json({
            status: 200,
            data: bbm
        })
    });
}