var express = require('express');
var router = express.Router();
var Log = require('log');
var log = new Log('debug');

const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

/* GET home page. */
router.get('/', function(req, res, next) {

  imagemin(['images/*.png'], 'build/images', {
      plugins: [
          imageminJpegtran(),
          imageminPngquant({quality: '65-80'})
      ]
  }).then(files => {
      log.info(files);
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
