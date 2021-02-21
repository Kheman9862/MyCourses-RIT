var mongoose = require("mongoose");
var FilesSchema = new mongoose.Schema({
  uri: String,
  type: String,
  title: String,
});

module.exports = mongoose.model("Files", FilesSchema);
