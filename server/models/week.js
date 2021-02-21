var mongoose = require("mongoose");
var WeeklySchema = new mongoose.Schema({
  weekname: String,
  files: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Files",
    },
  ],
});

module.exports = mongoose.model("Weekly", WeeklySchema);
