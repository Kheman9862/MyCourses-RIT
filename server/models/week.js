var mongoose = require("mongoose");
var WeeklySchema = new mongoose.Schema({ weekname: String, item: [String] });

module.exports = mongoose.model("Weekly", WeeklySchema);
