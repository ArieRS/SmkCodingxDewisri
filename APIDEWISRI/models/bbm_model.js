var mongoose = require('mongoose');

var bbmSchema = mongoose.Schema({
    date_input: {
        type: String,
        format: Date
    },
    diesel_duration: Number,
    price: Number,
    keterangan: String,
});

var BBM = module.exports = mongoose.model('bbm', bbmSchema);

module.exports.get = function (callback, limit) {
    BBM.find(callback).limit(limit);
}