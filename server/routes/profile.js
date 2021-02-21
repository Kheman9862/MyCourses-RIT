const router = require("express").Router();
const Profile = require("../models/Profile");
const passport = require("passport");
const mongoose = require("mongoose");
const User = require("../models/User");
const multer = require("multer");
const uuid = require("uuid").v4;
const AWS = require("aws-sdk");
const awskeys = require("../config/aws-keys").AWS;
var url;
const { ObjectId } = require("mongodb");

// Multer Configuration
const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, ""); //'' holds the path for temp location. blank means default folder
  },
});
const upload = multer({ storage }).single("file"); // profile_pic is the key

// AWS Configuration
const s3 = new AWS.S3({
  accessKeyId: awskeys.AWS_ID,
  secretAccessKey: awskeys.AWS_SECRET,
});

// Load Validation
const validateProfileInput = require("../validation/profile");

//POST Request - Create a new Profile
router.post(
  "/profile",
  [passport.authenticate("jwt", { session: false }), upload],
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.nickname) profileFields.nickname = req.body.nickname;
    if (req.body.nickname) profileFields.firstname = req.body.nickname;
    if (req.body.nickname) profileFields.lastname = req.body.nickname;
    if (req.body.hometown) profileFields.hometown = req.body.hometown;
    if (req.body.facebook) profileFields.facebook = req.body.facebook;
    if (req.body.twitter) profileFields.twitter = req.body.twitter;
    if (req.body.linkedin) profileFields.linkedin = req.body.linkedin;
    if (req.body.personal_website)
      profileFields.personal_website = req.body.personal_website;
    if (req.body.address_1) profileFields.address_1 = req.body.address_1;
    if (req.body.address_2) profileFields.address_2 = req.body.address_2;
    if (req.body.city) profileFields.city = req.body.city;
    if (req.body.state) profileFields.state = req.body.state;
    if (req.body.pincode) profileFields.pincode = req.body.pincode;
    if (req.body.country) profileFields.country = req.body.country;

    if (req.file) {
      let uploadedFile = req.file.originalname.split(".");
      const fileType = uploadedFile[uploadedFile.length - 1];
      console.log(req.file);
      const params = {
        Bucket: awskeys.AWS_PROFILE_BUCKET_NAME,
        Key: req.user.username + "_" + uuid() + "." + fileType,
        Body: req.file.buffer,
      };
      s3.upload(params, function (err, dataFile) {
        if (err) {
          console.log(err);
        } else {
          // console.log(dataFile.Location);
          console.log("from 1st else");
          url = dataFile.Location;
          a(url);
          // console.log(dataFile.Location);
          // console.log(dataFile.Location);
          // profileFields.profile_pic = url;
          // console.log(profileFields.profile_pic);
          // res.json(dataFile);
        }
      });
    } else {
      b();
    }
    function a(url) {
      console.log("outside if else");
      console.log(url);
      Profile.findOne({ user: req.user.id }).then((profile) => {
        if (profile) {
          // Update
          // console.log(profileFields.nickname);
          profileFields.profile_pic = url;
          Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true }
          ).then((profile) => res.json(profile));
        } else {
          // Create
          // Save Profile
          profileFields.profile_pic = "s3://ritmycoursesprofilepic/avatar.jpg";
          new Profile(profileFields)
            .save()
            .then((profile) => res.json(profile));
        }
      });
    }
    function b() {
      console.log("outside if else");
      Profile.findOne({ user: req.user.id }).then((profile) => {
        if (profile) {
          // Update
          // console.log(profileFields.nickname);
          // profileFields.profile_pic = url;
          Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true }
          ).then((profile) => res.json(profile));
        } else {
          // Create
          // Save Profile
          profileFields.profile_pic = "s3://ritmycoursesprofilepic/avatar.jpg";
          new Profile(profileFields)
            .save()
            .then((profile) => res.json(profile));
        }
      });
    }
  }
);

// Get Profile through user id
router.get("/user/:user_id", (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate("user")
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch((err) =>
      res.status(404).json({ profile: "There is no profile for this user" })
    );
});

//Get current user's profile
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

router.get("/:user_id/deadlines", (req, res) => {
  const agg = [
    {
      $match: {
        user: new ObjectId(req.params.user_id),
      },
    },
    {
      $lookup: {
        from: "assignments",
        localField: "courseList",
        foreignField: "course",
        as: "Assignments",
      },
    },
    {
      $project: {
        Assignments: 1,
      },
    },
    {
      $unwind: {
        path: "$Assignments",
      },
    },
    {
      $match: {
        "Assignments.submissionDate": {
          $gt: new Date(),
        },
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
