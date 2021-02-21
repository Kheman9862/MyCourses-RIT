var mongoose = require("mongoose");
var ContentSchema = new mongoose.Schema({
  week: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Weekly",
    },
  ],
});

module.exports = mongoose.model("Content", ContentSchema);
