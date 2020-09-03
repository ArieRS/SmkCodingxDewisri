var mongoose = require('mongoose');

var bibitSchema = mongoose.Schema({
    date_input: {
        type: String,
        format: Date
    },
    quantity: Number,
    price: Number,
    keterangan: String,
});

var Bibit = module.exports = mongoose.model('bibit', bibitSchema);

module.exports.get = function (callback, limit) {
    Bibit.find(callback).limit(limit);
}