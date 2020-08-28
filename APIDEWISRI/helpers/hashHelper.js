const bcrypt = require('bcrypt');

exports.encryptPassword = function(text) {
    bcrypt.hash(text, 10, function(err, hash) {
        newPass = hash;
        console.log(hash);
        return hash;
    });
}