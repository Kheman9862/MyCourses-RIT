var mongoose = require("mongoose");

var AssignmentSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  assignmentName: String,
  completionStatus: String,
  score: Number,
  submissionDate: String,
  submissions: [String],
});

module.exports = mongoose.model("Assignment", AssignmentSchema);
