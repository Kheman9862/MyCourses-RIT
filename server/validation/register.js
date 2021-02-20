const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = validateRegisterInput = (data) => {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : ""
  data.mobile = !isEmpty(data.mobile) ? data.mobile : "";

  if (Validator.isEmpty(data.username)) {
    errors.username = "UserName is required";
  }

  if (!Validator.isLength(data.username, { min: 4, max: 30 })) {
    errors.username = "Username must be between 4 and 30 characters";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 5, max: 40 })) {
    errors.password = "Password needs to be atleast 5 characters";
  }


  if (Validator.isEmpty(data.mobile)) {
    errors.mobile = "Mobile field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
