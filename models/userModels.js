const mongoose = require("mongoose")

var nameSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  date_today: Date,
  nationality: String,
   birthday: Date,
   gender: String,
   email: String,
   telno: String,
   nin: String,
   downpayment: String,
   subject: String,
   stage_name: String,
   other_loan: String,
   referee_name: String,
   referee_work: String,
   telno2: String,
   birthday: Date,
   NOK: String,
   telno3: String,
   


 })

var User = mongoose.model("User", nameSchema)

module.exports = mongoose.model("User",nameSchema)
