const express = require('express');
const router = express.Router();
const fs = require('fs');
const ytdl = require('ytdl-core');

// router.get('/', function (req, res)
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/ytdl', (req, res) => {
  res.render('ytdl');
});

router.post('/ytdl', (req, res) => {
  ytdl(req.body.data)
    .pipe(fs.createWriteStream('video.flv'));

  console.log(`req.body: ${JSON.stringify(req.body.data)}`);
  res.json(req.body.data);
});

module.exports = router;

