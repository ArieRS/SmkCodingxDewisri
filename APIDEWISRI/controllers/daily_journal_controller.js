DailyJournal = require('../models/daily_journal_model');
Journal = require('../models/journal_model');
User = require('../models/user_model');

exports.getAllDailyJournal = function (req, res) {
    DailyJournal.find({}, function (err, daily_journal) {
        res.json({
            data: daily_journal
        })
    });
}

exports.deleteDailyJournal = function (req, res) {
    DailyJournal.remove({
        _id: req.params.dailyJournalId
    }, function (err, dailyJournal) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Daily Journal deleted'
        });
    });
};

exports.addDailyJournal = function (req, res) {
    var daily_journal = new DailyJournal(req.body);
    // var user = new User();
    var date = new Date();

    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var newDate =day+"-"+month+"-"+year;
    daily_journal.inputDate = newDate;

    daily_journal.save().then(docDailyJournal => {
        Journal.findByIdAndUpdate(
            req.body.owner_journalId,
            {
                $set: {
                    dailyJournal: docDailyJournal._id
                }
            },
            function () {
                User.findById(req.body.owner_userId, function (error, user) {
                    user.coins = user.coins + 1;
                    user.save(function (err) {
                        if (err){
                            res.json(err);
                        }
                        res.json({
                            status: 200,
                            data: daily_journal
                        })
                    })
                })  
            }
        )    
    })
}
// function (error, results) {
//     if (error) {
//         console.log(error);
//     } else {
        // res.json({
        //     status: 200,
        //     data: daily_journal
        // })
//     }
// })
// exports.updatePlant = function (req, res) {

//     Plant.findById(req.params.plantId, function (err, plant) {
//         if (err)
//             res.send(err);
//         plant.variety = req.body.variety ? req.body.variety : plant.variety;
//         plant.comodity = req.body.comodity ? req.body.comodity : plant.comodity;

        // plant.save(function (error) {
            // if (error)
            //     res.json(error);
            // res.json({
            //     status: 200,
            //     message: 'Plant Info updated',
            //     data: plant
            // });
//         });
//     });
// };

// exports.getPupukById = function (req, res) {
//     Pupuk.findById(req.params.pupukId, function (err, pupuk) {
//         res.json({
//             status: 200,
//             data: pupuk
//         })
//     });
// }