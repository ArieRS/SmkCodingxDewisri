var mongoose = require('mongoose');

var plantSchema = mongoose.Schema({
    plantName: String,
    comodity: String,
    owner_userId: String,
    startDate: {
        type: String,
        format: Date
    }

});

var Plant = module.exports = mongoose.model('plant', plantSchema);

module.exports.get = function (callback, limit) {
    Plant.find(callback).limit(limit);
}