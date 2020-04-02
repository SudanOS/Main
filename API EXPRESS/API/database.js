const mongoose = require("mongoose");
var url = process.env.URL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define schema
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
  name: String,
  dep: String,
  totalProj: {
    type: Number,
    default: 0
  }
});

// Compile model from schema
var Member = mongoose.model("Users", MemberSchema);
module.exports.Member = Member;
