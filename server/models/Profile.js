const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  firstname: String,
  lastname: String,
  profile_pic: String,
  nickname: String,
  hometown: String,
  facebook: String,
  twitter: String,
  linkedin: String,
  personal_website: String,
  address_1: String,
  address_2: String,
  city: String,
  state: String,
  pincode: Number,
  country: String,
  courseList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

module.exports = mongoose.model("Profile", UserSchema);
