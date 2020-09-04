var mongoose = require('mongoose');

var plantingNeedSchema = mongoose.Schema({
    owner_plantId: String,
    // needs: [{
    //     _idPupuk: String,
    //     _idBBM: String,
    //     _idPestisida: String,
    // }],
    // needs: {
    //     type: Array,
    //     default: [{
    //         "_idPupuk": "",
    //         "_idBBM": "",
    //         "_idPestisida": "",
    //     }]
    // },
    _idPupukList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "pupuk",
        default: []
    }],

    _idBBMList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "bbm",
        default: []
    }],

    _idPestisidaList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "pestisida",
        default: []
    }],
    // needs: {
    //     type: array,
    //     items:{
    //         type: Object,
    // //         properties: {
    //             _idPupuk: String,
    //             _idBBM: String,
    //             _idPestisida: String,

    //         }
    //     }
    // },
    _idBibit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bibit",
    },
    dateInput: {
        type: String,
        format: Date,
    },
    // analysis
});

var PlantingNeed = module.exports = mongoose.model('plantingNeed', plantingNeedSchema);

module.exports.get = function (callback, limit) {
    PlantingNeed.find(callback).limit(limit);
}