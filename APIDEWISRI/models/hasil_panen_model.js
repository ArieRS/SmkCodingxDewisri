var mongoose = require('mongoose');

var hasilPanenSchema = mongoose.Schema({
    tanggalPanen: {
        type: String,
        format: Date
    },
    hargaPasar: {
        type: Number
    },
    hasilPanen: {
        type: Number
    },
    analisaHasilPanen: {
        type: Number
    },
    owner_plantId: {
        type: String
    }     
});

var HasilPanen = module.exports = mongoose.model('hasilPanen', hasilPanenSchema);

module.exports.get = function (callback, limit) {
    HasilPanen.find(callback).limit(limit);
}