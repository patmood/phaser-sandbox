var express = require('express')
  , router = express.Router()
  , Snippet = require('../models/snippet.js')
  , defaults = {
      code: [
         "var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create });\n",
         "function preload() {",
         "  game.load.image('phaser', 'assets/sprites/phaser2.png');",
         "}\n",
         "function create() {",
         "  game.add.sprite(0, 0, 'phaser');",
         "}\n"
        ].join('\n'),
      phaserVersion: '2.1.0'
    }

router.get('/', function(req, res) {
  res.render('index', defaults);
})

router.post('/save', function(req, res) {
  new Snippet(req.body).save(function(err, snippet) {
    if (err) throw err
    res.json(snippet._id)
  })
})

router.get('/:_id', function(req, res) {
  Snippet.findById(req.params._id, function(err, snippet) {
    if (err) throw err
    res.render('index', snippet)
  })
})

module.exports = router;
