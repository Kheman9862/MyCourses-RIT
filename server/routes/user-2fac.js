const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
const Nexmo = require("nexmo");

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

// Two Factor Authentication
//2 factor authentication
const nexmo = new Nexmo({
  apiKey: "1e230c21",
  apiSecret: "CKeL0yHPVB7B4dUo",
});

router.post(
  "/authenticate",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    nexmo.verify.request(
      {
        number: req.body.number,
        brand: "RIT MyCourses",
      },
      (error, result) => {
        if (result.status != 0) {
          console.log("status = " + result.status);
          res.json({ success: false, message: result.error_text });
        } else {
          res.json({ success: true, requestId: result.request_id });
        }
      }
    );
  }
);

router.post(
  "/check",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    nexmo.verify.check(
      {
        request_id: req.body.requestId,
        code: req.body.code,
      },
      (error, result) => {
        if (result.status != 0) {
          res.json({ success: false, message: result.error_text });
        } else {
          res.json({ success: true });
        }
      }
    );
  }
);

module.exports = router;
