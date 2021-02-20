const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.nickname = !isEmpty(data.nickname) ? data.nickname : "";
  data.Hometown = !isEmpty(data.Hometown) ? data.Hometown : "";
  data.profile_pic = !isEmpty(data.profile_pic) ? data.profile_pic : "";
  data.facebook = !isEmpty(data.facebook) ? data.facebook : "";
  data.twitter = !isEmpty(data.twitter) ? data.twitter : "";
  data.linkedin = !isEmpty(data.linkedin) ? data.linkedin : "";
  data.personal_website = !isEmpty(data.personal_website)
    ? data.personal_website
    : "";
  data.address_1 = !isEmpty(data.address_1) ? data.address_1 : "";
  data.address_2 = !isEmpty(data.address_2) ? data.address_2 : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.state = !isEmpty(data.state) ? data.state : "";
  data.pincode = !isEmpty(data.pincode) ? data.pincode : "";
  data.country = !isEmpty(data.country) ? data.country : "";

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
