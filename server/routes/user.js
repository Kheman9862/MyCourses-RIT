const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
const Profile = require("../models/Profile");
// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Create Account
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "Email already exist";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// post Login
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }).then((user) => {
    //Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    //User Matched

    //Check Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        //Password Matched
        // Payload for jwt sign
        const payload = { user: user.id, name: user.username };

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password Incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

router.get("/user/:user_id/deadlines", (req, res) => {
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

// GET - Get user
router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
    });
  }
);

// GET - Get user
router.get("/users", (req, res) => {
  Profile.find()
    .populate("user")
    .then((profiles) => {
      if (!profiles) {
        console.log(err);
      } else {
        res.json(profiles);
      }
    });
});

module.exports = router;
