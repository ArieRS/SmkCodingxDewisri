var mongoose = require('mongoose');

var journalSchema = mongoose.Schema({
    journalName: String,
    comodity: String,
    owner_userId: String,
    startDate: {
        type: String,
        format: Date
    }

});

var journal = module.exports = mongoose.model('journal', journalSchema);

module.exports.get = function (callback, limit) {
    journal.find(callback).limit(limit);
}