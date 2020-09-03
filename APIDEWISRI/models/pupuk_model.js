var mongoose = require('mongoose');

var pupukSchema = mongoose.Schema({
    date_input: {
        type: String,
        format: Date
    },
    quantity: Number,
    price: Number,
    keterangan: String,
});

var Pupuk = module.exports = mongoose.model('pupuk', pupukSchema);

module.exports.get = function (callback, limit) {
    Pupuk.find(callback).limit(limit);
}