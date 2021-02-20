const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./config/keys");


const app = express();



//Body parser middlware
app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(bodyParser.json());
app.use(cors());

//DB config
const db = require("./config/keys").mongoURI;

//connect to MongoDb
mongoose
  .connect(db)
  .then(() => console.log("Success"))
  .catch((err) => console.log(err));


//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

// api dump
app.use("/api", userRoutes);


const port = process.env.PORT || 3000;

app.listen(port, keys.ipAddress, () =>
  console.log(`Server is running on ${port}`)
);
