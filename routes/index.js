var express = require('express')
  , router = express.Router()
  , Snippet = require('../models/snippet.js')

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
