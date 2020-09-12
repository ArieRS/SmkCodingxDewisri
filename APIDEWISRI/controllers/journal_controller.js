Journal = require('../models/journal_model');
var Plant = require('../models/plant_model');

exports.addJournal = function (req, res) {
    var journal = new Journal(req.body);
    var date = new Date();

    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var newDate =day+"-"+month+"-"+year;
    // journal.inputDate = newDate;
    var arrayPlantList = [];

    req.body.inputDate ? journal.inputDate = req.body.inputDate : journal.inputDate = newDate;
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

exports.updateJournal = function (req, res) {

    Journal.findById(req.params.journalId, function (err, journal) {
        if (err)
            res.send(err);

        journal.dailyJournal = req.body.dailyJournal ? req.body.dailyJournal : journal.dailyJournal;

        journal.save(function (error) {
            if (error)
                res.json(error);
            res.json({
                status: 200,
                message: 'Journal Info updated',
                data: journal
            });
        });
    });
};


exports.getJournalById = function (req,res) {
    Journal.findById(req.params.journalId, function (err, journal) {
        res.json({
            status: 200,
            data: journal
        })
    }).populate("plantList")
}

exports.getJournalByDate = function (req,res) {
    Journal.find({'inputDate': req.params.date, 'owner_userId': req.params.userId}, function (err, journal) {
        res.json({
            status: 200,
            data: journal
        })
    }).populate("plantList").populate('dailyJournal')
}