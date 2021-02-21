const router = require("express").Router();
const User = require("../models/User");
const Assignment = require("../models/assignment");
const Profile = require("../models/Profile");
const Course = require("../models/course");
const Content = require("../models/content");
const Weekly = require("../models/week");
const moment = require("moment");
const multer = require("multer");
const uuid = require("uuid").v4;
const AWS = require("aws-sdk");
const awskeys = require("../config/aws-keys").AWS;
// Multer Configuration
const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, ""); //'' holds the path for temp location. blank means default folder
  },
});
const upload = multer({ storage }).single("file"); // file is the key

// AWS Configuration
const s3 = new AWS.S3({
  accessKeyId: awskeys.AWS_ID,
  secretAccessKey: awskeys.AWS_SECRET,
});

// SHOW - shows the selected course assignment
router.get("/:id/assignment", function (req, res) {
  //find the course with provided ID
  Assignment.find({ course: req.params.id })
    .populate("Course")
    .exec(function (err, foundAssignment) {
      if (err) {
        console.log(err);
      } else {
        var upcoming = foundAssignment[0].submissionDate;
        for (var i = 0; i < foundAssignment.length; i++) {
          if (moment(foundAssignment[i]).isBefore(upcoming)) {
            upcoming = foundAssignment[i];
          }
        }
        Assignment.find({ submissionDate: upcoming })
          .populate("Course")
          .exec(function (err, foundUpcoming) {
            if (err) {
              console.log(err);
            } else {
              //   res.json(foundAssignment);
              //   res.json(upcoming);
              res.json(foundUpcoming);
            }
          });
      }
    });
});

// Upload/ Submit an Assignment
router.post("/:user_id/:course_id/:ass_id/upload", upload, function (req, res) {
  // console.log(req.file);
  let uploadedFile = req.file.originalname.split(".");
  const fileType = uploadedFile[uploadedFile.length - 1];
  var assname;
  Assignment.findById(req.params.ass_id)
    .populate("Course")
    .exec(function (err, foundAssignment) {
      assname = foundAssignment.assignmentName;
      // res.json({ message: "success" });
      User.findById(req.params.user_id).exec(function (err, foundUser) {
        Course.findById(req.params.course_id).exec(function (err, foundCourse) {
          const params = {
            Bucket: awskeys.AWS_BUCKET_NAME,
            Key:
              foundUser.username +
              "_" +
              foundCourse.courseId +
              "_" +
              assname +
              "_" +
              uuid() +
              "." +
              fileType,
            Body: req.file.buffer,
          };

          s3.upload(params, function (err, dataFile) {
            if (err) {
              console.log(err);
            } else {
              console.log(dataFile.Location);
              Assignment.findByIdAndUpdate(
                req.params.ass_id,
                { $push: { submissions: dataFile.Location } },
                { new: true }
              ).then((assignment) => res.json(assignment));
              // res.json(dataFile);
            }
          });
        });
      });
    });
});

module.exports = router;
