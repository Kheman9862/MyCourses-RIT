var mongoose = require("mongoose");
var courseSchema = new mongoose.Schema({
  courseId: String,
  courseName: String,
  courseContent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Content",
  },
});

module.exports = mongoose.model("Course", courseSchema);
