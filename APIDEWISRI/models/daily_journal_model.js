var mongoose = require('mongoose');

var dailyJournalSchema = mongoose.Schema({
    owner_journalId: String,
    inputDate: {
        type: String,
        format: Date,
        default: ''
    },
    activity: {
        type: String,
        default: ""  
    },
    problem: {
        type: String,
        default: ""  
    }
});

var DailyJournal = module.exports = mongoose.model('dailyJournal', dailyJournalSchema);

module.exports.get = function (callback, limit) {
    DailyJournal.find(callback).limit(limit);
}