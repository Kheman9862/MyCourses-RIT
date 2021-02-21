const router = require("express").Router();
const passport = require("passport");
const mongoose = require("mongoose");
const User = require("../models/User");
const Profile = require("../models/Profile");
const Course = require("../models/course");
const Content = require("../models/content");
const Weekly = require("../models/week");
const Files = require("../models/file");

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .populate("user")
      .then((profile) => {
        if (!profile) {
          errors.noProfile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch((err) => res.status(404).json(error));
  }
);

// SHOW - shows the course list
router.get("/:user_id/courses", function (req, res) {
  Profile.findOne({ user: req.params.user_id })
    .populate("courseList")
    .then((profile) => {
      if (!profile) {
        errors.noProfile = "There is no profile for this user";
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) => res.status(404).json(error));
});

// SHOW - shows the selected course
router.get("/:user_id/courses/:id", function (req, res) {
  //find the course with provided ID
  Course.findById(req.params.id)
    .populate("courseContent")
    .then((course) => {
      // console.log(course);
      if (!course) {
        errors.noProfile = "There is no course for this user";
        return res.status(404).json(errors);
      } else {
        Content.findById(course.courseContent)
          .populate("week")
          .then((weekly) => {
            // res.json(course.courseContent);
            res.json(weekly);
          });
        // Content.findById(course.courseContent)
        //   .populate("week")
        //   .then((content) => {
        //     if (!content) {
        //       errors.noProfile = "There is no course for this user";
        //       return res.status(404).json(errors);
        //     } else {
        //       res.json(course.courseContent);
        //       // console.log("hi");
        //       // res.json("hello");
        //       // res.json(content);
        //     }
        //   });
      }
    });
});
//     .exec(function (err, foundCourse) {
//       if (err) {
//         console.log(err);
//       } else {
//         Content.findById(foundCourse.courseContent)
//           .populate("week")
//           .exec(function (err, foundContent) {
//             if (err) {
//               console.log(err);
//             } else {
//               res.json(foundContent);
//             }
//           });
//         // res.json(foundContent);
//       }
//     });
// });

// SHOW - shows the selected course
router.get("/:user_id/courses/:id/:weekId", function (req, res) {
  //find the course with provided ID
  Course.findById(req.params.id)
    .populate("courseContent")
    .exec(function (err, foundCourse) {
      if (err) {
        console.log(err);
      } else {
        Content.findById(foundCourse.courseContent)
          .populate("week")
          .exec(function (err, foundContent) {
            if (err) {
              console.log(err);
            } else {
              // res.json(foundContent);
              Weekly.findOne({ weekId: req.params.weekId })
                .populate("files")
                .then((weekly) => {
                  // res.json(course.courseContent);
                  res.json(weekly);
                });
            }
          });
        // res.json(foundContent);
      }
    });
});

module.exports = router;
