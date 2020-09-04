var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        default: ''
    },
    email:{
        type: String,
        default: ''
    },
    password:{
        type: String,
        default: ''
    },
    name:{
        type: String,
        default: ''
    },
    phone:  {
        type: String,
        default: ''
    },
    avatar:  {
        type: String,
        default: ''
    },
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
    journalList:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "journal"
    }]
          
});

var User = module.exports = mongoose.model('user', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}