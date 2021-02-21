const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const nunjucks = require("nunjucks");
//use Routes
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const classListRoutes = require("./routes/classList");
const courseRoutes = require("./routes/course");
const assignmentRoutes = require("./routes/assignment");
const print = require("./generate-endpoints");
const app = express();
const cors = require("cors");
const keys = require("./config/keys");

//Body parser middlware
app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(bodyParser.json());
app.use(cors());

//DB config
const db = require("./config/keys").mongoURI;
nunjucks.configure("views", { express: app });

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
app.use("/api", profileRoutes);
app.use("/api", classListRoutes);
app.use("/api/user", courseRoutes);
app.use("/api", assignmentRoutes);

// Generating Endpoints
app._router.stack.forEach(print.bind(null, []));

const port = process.env.PORT || 3000;

app.listen(port, keys.ipAddress, () =>
  console.log(`Server is running on ${port}`)
);
