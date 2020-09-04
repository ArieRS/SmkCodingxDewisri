var mongoose = require('mongoose');

var pestisidaSchema = mongoose.Schema({
    date_input: {
        type: String,
        format: Date
    },
    quantity: Number,
    price: Number,
    keterangan: String,
});

var Pestisida = module.exports = mongoose.model('pestisida', pestisidaSchema);

module.exports.get = function (callback, limit) {
    Pestisida.find(callback).limit(limit);
}