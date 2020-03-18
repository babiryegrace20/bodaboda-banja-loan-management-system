const mongoose = require("mongoose")

/**var executiveSchema = new mongoose.Schema({
  username: String,
  pass: String,
 })**/

var nameSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  date_today: Date,
  nationality: String,
   birthday: Date,
   gender: String,
   email: String,
   telno: String,
   nin: String
 })

//var Executive = mongoose.model("Executive", executiveSchema)
var User = mongoose.model("User", nameSchema)

module.exports = mongoose.model("User",nameSchema)
//module.exports = mongoose.model("Executive",executiveSchema)