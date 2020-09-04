PlantingNeeds = require('../models/planting_needs');
Pestisida = require('../models/pestisida_model');
// User = require('../models/user_model');
// var response = require('../helpers/responseHelper');


exports.getAllPestisida = function (req, res) {
    Pestisida.find({}, function (err, pestisida) {
        res.json({
            data: pestisida
        })
    });
}

exports.deletePestisida = function (req, res) {
    Pestisida.remove({
        _id: req.params.pestisidaId
    }, function (err, pestisida) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Pestisida deleted'
        });
    });
};

exports.addPestisida = function (req, res) {
    var pestisida = new Pestisida(req.body);
    pestisida.save().then(docPestisida => {
        PlantingNeeds.findByIdAndUpdate(
            req.body.owner_plantingNeedsId,
            {
                $push: {
                    _idPestisidaList: docPestisida._id
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
                        data: pestisida
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

exports.getPestisidaById = function (req, res) {
    Pestisida.findById(req.params.pestisidaId, function (err, pestisida) {
        res.json({
            status: 200,
            data: pestisida
        })
    });
}