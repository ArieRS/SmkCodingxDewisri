Journal = require('../models/journal_model');
var Plant = require('../models/plant_model');

exports.addJournal = function (req, res) {
    var journal = new Journal(req.body);
    var date = new Date();
    journal.inputDate = date.toISOString();
    var arrayPlantList = [];
    // res.json({
    //     journal: journal
    // })
    Plant.find({ 'owner_userId': req.body.owner_userId }, function (error, result) {
        if (error) {
            throw error;
        } else {
            for (let index = 0; index < result.length; index++) {
                arrayPlantList.push(result[index]._id)
            }
            journal.plantList = arrayPlantList;
            // res.json({
            //     status: 200,
            //     data: journal.plantList
            // })
            journal.save().then(docJournal => {
                User.findByIdAndUpdate(
                    req.body.owner_userId,
                    {
                        $push: {
                            journalList: docJournal._id
                        }
                    },
                    {
                        new: true,
                        useFindAndModify: false
                    }
                    ,
                    function (err, results) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json({
                                status: 200,
                                data: journal
                            })
                        }
                    }
                )
            })
        }
    })

}