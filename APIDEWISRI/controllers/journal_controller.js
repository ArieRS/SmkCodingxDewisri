Journal = require('../models/journal_model');

exports.addJournal = function (req, res) {
    var journal = new Journal(req.body);
    var date = new Date();
    journal.inputDate = date.toISOString();
    // res.json({
    //     journal: journal
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
            , function (error, results) {
                if (error) {
                    console.log(error);
                } else {
                    res.json({
                        status: 200,
                        data: journal
                    })
                }
            })
    })
}