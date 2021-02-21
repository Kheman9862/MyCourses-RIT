const router = require("express").Router();
const passport = require("passport");
const mongoose = require("mongoose");
const User = require("../models/User");
const Profile = require("../models/Profile");
const Course = require("../models/course");

const { ObjectId } = require("mongodb");

// var deepPopulate = require("mongoose-deep-populate")(mongoose);

// Course.plugin(deepPopulate, {
//   whitelist: ["Content", "Content.Weekly"],
// });

// SHOW - shows the course list
router.get("", function (req, res) {
  Profile.findOne({ user: req.params.user_id })
    .populate("Course")
    .then((course) => {
      if (!course) {
        errors.nocourse = "There is no courses for this user";
        res.status(404).json(errors);
      }

      res.json(course);
    })
    .catch((err) =>
      res.status(404).json({ profile: "There is no course for this user" })
    );
});

// SHOW - shows the selected course
// router.get("/user/:user_id/courses/:id", function (req, res) {
//   //find the course with provided ID
//   Course.findById(req.params.id)
//     .populate("Content")
//     .exec(function (err, foundCourse) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.json(foundCourse);
//       }
//     });
// });

router.get("/:user_id/courses/:id/classlist", (req, res) => {
  const agg = [
    {
      $match: {
        courseList: new ObjectId(req.params.id),
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "userDetails",
      },
    },
    {
      $unwind: {
        path: "$userDetails",
      },
    },
    {
      $project: {
        user: true,
        nickname: true,
        hometown: true,
        firstname: true,
        lastname: true,
        profile_pic: true,
        nickname: true,
        hometown: true,
        facebook: true,
        twitter: true,
        linkedin: true,
        personal_website: true,
        address_1: true,
        address_2: true,
        city: true,
        state: true,
        pincode: true,
        country: true,
        username: "$userDetails.username",
        email: "$userDetails.email",
      },
    },
  ];

  Profile.aggregate(agg, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});
module.exports = router;
