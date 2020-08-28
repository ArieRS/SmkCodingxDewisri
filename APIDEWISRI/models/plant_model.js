var mongoose = require('mongoose');

var plantSchema = mongoose.Schema({
    plantName: String,
    comodity: String,
    // owner_userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "user"
    // },
    startDate: {
        type: String,
        format: Date
    }

});

var Plant = module.exports = mongoose.model('plant', plantSchema);

module.exports.get = function (callback, limit) {
    Plant.find(callback).limit(limit);
}