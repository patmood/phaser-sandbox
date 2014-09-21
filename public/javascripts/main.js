  var defaultCode = [
   "var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create });",
   "",
   "function preload() {",
   "  game.load.image('phaser', 'assets/sprites/phaser2.png');",
   "}",
   "",
   "function create() {",
   "  game.add.sprite(0, 0, 'phaser');",
   "}",
   ""
  ].join('\n')
  var myCodeMirror = CodeMirror
  var Sandbox = {
    init: function() {
      Sandbox.template = _.template($('#template').html())
      Sandbox.destination = $('#preview iframe')[0]
      Sandbox.render()
    },
    render: function(code) {
      var data = {
        code: code,
        phaser: 'https://cdn.rawgit.com/photonstorm/phaser/2.1.0/build/phaser.js'
      }
      Sandbox.destination.srcdoc = Sandbox.template(data)
    }
  }

  $(document).ready(function() {
    Sandbox.init()
    $('#load-code').on('click', function() {
      var code = myCodeMirror.getValue()
      Sandbox.render(code)
    })
    var myTextArea = document.getElementById('code-box')

    myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
      lineNumbers: true,
      mode:  "text/javascript",
      tabSize: 2,
      lineWrapping: true,
      matchBrackets: true,
      styleActiveLine: true,
      theme: 'pastel-on-dark',
      autofocus: true
    })

    myCodeMirror.setValue(defaultCode)
  })

