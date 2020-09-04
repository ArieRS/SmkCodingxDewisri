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
    _idPupukList: {
        type: Array,
        default: []
    },

    _idBBMList: {
        type: Array,
        default: []
    },

    _idPestisidaList: {
        type: Array,
        default: []
    },
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
    _idBibit: String,
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