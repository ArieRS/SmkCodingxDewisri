var mongoose = require('mongoose');

var journalSchema = mongoose.Schema({
    owner_userId: String,
    inputDate: {
        type: String,
        format: Date
    },
    jurnalHarian: String,
    plantList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "plant"
    }]
});

var Journal = module.exports = mongoose.model('journal', journalSchema);

module.exports.get = function (callback, limit) {
    Journal.find(callback).limit(limit);
}