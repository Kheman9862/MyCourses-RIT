import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

//Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/register", userData)
    .then((res) => res)
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// // Login- get User token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/login", userData)
    .then((res) => {
      //Save to AsyncStorage
      const { token } = res.data;

      //Set token to ls
      AsyncStorage.setItem("jwtToken", token);

      //Set token to Auth Header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  //Remove token from the local storage
  AsyncStorage.removeItem("jwtToken");
  //Remove auth header for fututre requests
  setAuthToken(false);
  //set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
