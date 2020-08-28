let mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/dewisri')
    .then(() => {
        console.log("Successfully !!! Sekarang Anda Terkonek Ke database");
    }).catch(err => {
        console.log('Error !!! database Tidak Terkoneksi atau Tidak Ada');
        process.exit();
    });

// module.exports = MongoConnection;