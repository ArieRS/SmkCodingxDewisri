var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    name: String,
    phone: String,
    avatar: String,
    isPremium: {
        type: Boolean,
        default: false
    },
    coins: Number,
    userStatus:{
        type: String,
        enum:['petani', 'admin', 'editor'],
        default: 'petani'
    },
    plantList:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "plant"
    }]
          
});

var User = module.exports = mongoose.model('user', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}