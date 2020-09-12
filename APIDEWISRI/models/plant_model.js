var mongoose = require('mongoose');

var plantSchema = mongoose.Schema({
    variety: String,
    comodity: {
        type: String,
        enum: ['cabai',
            'kentang',
            'kubis',
            'wortel',
            'sawi',
            'tomat']
    },
    startDate: {
        type: String,
        format: Date
    },
    owner_userId: String,
    plantingNeeds: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "plantingNeed"
    },
    hasilPanen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hasilPanen"
    }
});

var Plant = module.exports = mongoose.model('plant', plantSchema);

module.exports.get = function (callback, limit) {
    Plant.find(callback).limit(limit);
}