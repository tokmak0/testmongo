const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let comment_schema = new Schema({
  name: String,
  surname:String
});




 var comment = mongoose.model('comment', comment_schema);

module.exports=comment;