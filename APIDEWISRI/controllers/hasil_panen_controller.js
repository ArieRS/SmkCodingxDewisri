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
    var hasilPanen = new HasilPanen();

    //Convert from kilo to kwintal
    var newHasilPanen = req.body.hasilPanen * 100
    var sumHasilPanen = newHasilPanen * req.body.hargaPasar;

    hasilPanen.hasilPanen = req.body.hasilPanen
    hasilPanen.hargaPasar = req.body.hargaPasar
    hasilPanen.tanggalPanen = req.body.tanggalPanen
    hasilPanen.owner_plantId = req.body.owner_plantId
    
    var PengeluaranPupuk = 0
    var PengeluaranBibit = 0
    var PengeluaranBBM = 0
    var PengeluaranPestisida = 0
    var listPengeluaranBibit = []
    var sumPengeluaran = 0
    // Plant.find({'owner_userId': req.body.owner_userId})
    PlantingNeeds.find({'owner_plantId': req.body.owner_plantId})
        .populate('_idPupukList')
        .populate('_idBBMList')
        .populate('_idPestisidaList')
        .populate('_idBibit')
        .exec(
            function (error,result) {
                console.log(result[0]._idBibit);
                result[0]._idPupukList.map((e,index)=> {
                    if (result[0]._idPupukList[index].price != undefined || result[0]._idPupukList[index].quantity != undefined) {
                        PengeluaranPupuk =+  result[0]._idPupukList[index].price * result[0]._idPupukList[index].quantity
                        // console.log("a"+PengeluaranPupuk);
                    }
                })

                result[0]._idBBMList.map((e,index)=> {
                    if (result[0]._idBBMList[index].price != undefined || result[0]._idBBMList[index].diesel_duration != undefined) {
                        PengeluaranBBM =+  result[0]._idBBMList[index].price * result[0]._idBBMList[index].diesel_duration
                        // console.log("a"+PengeluaranPupuk);
                    }
                })
                
                result[0]._idPestisidaList.map((e,index)=> {
                    if (result[0]._idPestisidaList[index].price != undefined || result[0]._idPestisidaList[index].quantity != undefined) {
                        PengeluaranPestisida =+  result[0]._idPestisidaList[index].price * result[0]._idPestisidaList[index].quantity
                        // console.log("a"+PengeluaranPupuk);
                    }
                })

                result[0]._idBibit.map((e,index)=> {
                    if (result[0]._idBibit[index].price != undefined || result[0]._idBibit[index].quantity != undefined) {
                        PengeluaranBibit =+  result[0]._idBibit[index].price * result[0]._idBibit[index].quantity
                        // console.log("a"+PengeluaranPupuk);
                    }
                })

                sumPengeluaran = PengeluaranBibit + PengeluaranPestisida + PengeluaranPupuk + PengeluaranBBM;

                hasilPanen.analisaHasilPanen = sumHasilPanen - sumPengeluaran;
                
                hasilPanen.save().then(docHasilPanen => {
                    Plant.findByIdAndUpdate(
                        req.body.owner_plantId,
                        {
                            $push:{
                                hasilPanen: docHasilPanen._id
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
                                    data: hasilPanen
                                })
                            }
                        })
                })

            }

        )
    // PlantingNeeds.find({'owner_plantId': req.body.owner_plantId}, function (err, result) {
        // res.json({
        //     status: 200,
        //     data: result
        // })

        // result.forEach(element => {
        //     // console.log('element : ' + element._idPupukList.values());
        //     const iteratorPupukListId =  element._idPupukList.values();
        //     for (const dataPupuk of iteratorPupukListId) {
        //         // console.log("dataPupuk: " + dataPupuk);
        //         Pupuk.findById( dataPupuk, function (err, pupukResult) {
                    
        //             if (pupukResult != null) {
        //                 PengeluaranPupuk = PengeluaranPupuk + (pupukResult.price * pupukResult.quantity)
        //                 console.log(PengeluaranPupuk);
                        
        //             } else {
        //                 console.log('kososng');
        //             }
                    
        //         })

        //         // res.json({
        //         //     status: 200,
        //         //     data: PengeluaranPupuk
        //         // })
        //     }
        //     const iteratorBibitListId =  element._idBBMList.values();
        //     for (const dataBibit of iteratorBibitListId) {
        //         // console.log("dataBibit: " + dataBibit);
        //         BBM.findById( dataBibit, function (err, bibitResult) {
                    
        //             if (bibitResult != null) {
        //                 PengeluaranBibit += bibitResult.price * (bibitResult.dieselDuration/10)
        //                 console.log(PengeluaranBibit);
        //             } else {
        //                 console.log('kososng');
        //             }
                    
        //         })
        //     }
        // });

        

          
    // })


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
    //                 res.json({
    //                     status: 200,
    //                     data: hasilPanen
    //                 })
    //             }
    //         })
    // })
}

exports.testHasilPanen = function(){

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