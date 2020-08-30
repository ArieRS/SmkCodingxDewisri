let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dewisri', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Successfully !!! Sekarang Anda Terkonek Ke database");
    }).catch(err => {
        console.log('Error !!! database Tidak Terkoneksi atau Tidak Ada');
        process.exit();
    });
