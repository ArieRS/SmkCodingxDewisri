'use strict'

var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    multer = require('multer'),
    controller = require('../controllers/controller');
var cors = require('cors');
var upload = multer();

app.use(cors({ credentials: true }));
//x-www-urlencoded post
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//formdata multipart post
app.use(upload.array())
app.use(express.static('public'))

exports.getImage = app.use('/storage/image/', express.static('./storage/image/'))
exports.getImagePost = app.use('/storage/imagePost/', express.static('./storage/post/'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, Origin, Authorization");

    res.header("Access-Control-Allow-Credentials", true)
    return next();
});

app.options(cors())

app.use(controller.adminBro.options.rootPath, controller.router);

var routes = require('./routes');
routes(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);