var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var SnippedSchema = new Schema({
  code: String
})

module.exports = mongoose.model('Snippet', SnippedSchema)
