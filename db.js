exports.setup = function() {
  var mongoose = require('mongoose')
  mongoose.connect('mongodb://localhost/test') // Replace this with env variable
  var db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
}
