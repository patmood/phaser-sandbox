  var myCodeMirror = CodeMirror
  var Sandbox = {
    init: function() {
      Sandbox.template = _.template($('#template').html())
      Sandbox.destination = $('#preview iframe')[0]
    },
    render: function(data) {
      Sandbox.destination.srcdoc = Sandbox.template(data)
    }
  }

  function saveSnippet(data) {
    $.ajax({
      type: 'POST',
      url: '/save',
      data: data,
      success: function(res) {
        console.log('success!', res)
      },
      error: function(err) {
        console.log(err)
      }
    })
    console.log('save')
  }

  function getData(next) {
    var data = {
      code: myCodeMirror.getValue(),
      phaserVersion: '2.1.0'
    }
    next(data)
  }

  $(document).ready(function() {
    Sandbox.init()

    $('#load-code').on('click', function() {
      getData(Sandbox.render)
    })

    $('#save-snippet').on('click', function() {
      getData(saveSnippet)
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

    myCodeMirror.setValue(myTextArea.innerHTML)
    getData(Sandbox.render)
  })

