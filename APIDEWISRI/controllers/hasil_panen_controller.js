PlantingNeeds = require('../models/planting_needs');
HasilPanen = require('../models/hasil_panen_model');
Plant = require('../models/plant_model');
Pupuk = require('../models/pupuk_model');
BBM = require('../models/bbm_model');
Bibit = require('../models/bibit_model');
Pestisida = require('../models/pestisida_model');
// var response = require('../helpers/responseHelper');


exports.getAllHasilPanen = function (req, res) {
    HasilPanen.find({}, function (err, hasilPanen) {
        res.json({
            data: hasilPanen
        })
    });
}

exports.deleteHasilPanen = function (req, res) {
    HasilPanen.remove({
        _id: req.params.hasilPanenId
    }, function (err, hasilPanen) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Hasil Panen deleted'
        });
    });
};

exports.addHasilPanen = function (req, res) {
    var hasilPanen = new HasilPanen(req.body);

    //Convert from kilo to kwintal
    var newHasilPanen = req.body.hasilPanen * 100

    hasilPanen.hasilPanen = newHasilPanen

    hasilPanen.analisaHasilPanen = (newHasilPanen * req.body.hargaPasar)
    
    // Plant.find({'owner_userId': req.body.owner_userId})

    PlantingNeeds.find({'owner_plantId': req.body.owner_plantId}, function (err, result) {
        // res.json({
        //     status: 200,
        //     data: result
        // })
        var PengeluaranPupuk = 0
        var listPengeluaranPestisida = []
        var listPengeluaranBBM = []
        var listPengeluaranBibit = []

        result.forEach(element => {
            // console.log('element : ' + element._idPupukList.values());
            const iteratorPupukListId =  element._idPupukList.values();
            for (const dataPupuk of iteratorPupukListId) {
                // console.log("dataPupuk: " + dataPupuk);
                Pupuk.findById( dataPupuk, function (err, pupukResult) {
                    
                    if (pupukResult != null) {
                        PengeluaranPupuk += pupukResult.price * pupukResult.quantity
                        console.log(PengeluaranPupuk);
                    } else {
                        console.log('kososng');
                    }
                    
                })
            }
            const iteratorPupukListId =  element._idPupukList.values();
            for (const dataPupuk of iteratorPupukListId) {
                // console.log("dataPupuk: " + dataPupuk);
                Pupuk.findById( dataPupuk, function (err, pupukResult) {
                    
                    if (pupukResult != null) {
                        PengeluaranPupuk += pupukResult.price * pupukResult.quantity
                        console.log(PengeluaranPupuk);
                    } else {
                        console.log('kososng');
                    }
                    
                })
            }
            
        },
        // res.json({
        //     status: 200,
        //     data: listPengeluaranPupuk
        // })
        );


          
    })
    // hasilPanen.save().then(docHasilPanen => {
    //     Plant.findByIdAndUpdate(
    //         req.body.owner_plantId,
    //         {
    //             $push:{
    //                 hasilPanen: docHasilPanen._id
    //             }
    //         },
    //         {
    //             new: true,
    //             useFindAndModify: false
    //         }
    //         , function (error, results) {
    //             if (error) {
    //                 console.log(error);
    //             } else {
                    // res.json({
                    //     status: 200,
                    //     data: hasilPanen
                    // })
    //             }
    //         })
    // })
}

exports.updateHasilPanen = function (req, res) {

    HasilPanen.findById(req.params.hasilPanenId, function (err, hasilPanen) {
        if (err)
            res.send(err);
            
        //Convert from kilo to kwintal
        hasilPanen.hasilPanen = req.body.hasilPanen ? req.body.hasilPanen*100 : hasilPanen.hasilPanen;
        
        hasilPanen.hargaPasar = req.body.hargaPasar ? req.body.hargaPasar : hasilPanen.hargaPasar;
        hasilPanen.tanggalPanen = req.body.tanggalPanen ? req.body.tanggalPanen : hasilPanen.tanggalPanen;
        
        
        hasilPanen.save(function (error) {
            if (error)
                res.json(error);
            res.json({
                status: 200,
                message: 'Hasil Panen Info updated',
                data: hasilPanen
            });
        });
    });
};

exports.getHasilPanenById = function (req,res) {
    HasilPanen.findById(req.params.hasilPanenId, function (err, hasilPanen) {
        res.json({
            status: 200,
            data: hasilPanen
        })
    });
}