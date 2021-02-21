//api/:user_id/courses/:id/classlist

import axios from "axios";

export const GET_CLASSLIST = "GET_CLASSLIST";
export const CLASSLIST_LOADING = "CLASSLIST_LOADING";

// Get Classlist
export const getClasslist = (userID, courseID) => (dispatch) => {
  dispatch(setClasslistLoading());
  axios
    .get(`/api/${userID}/courses/${courseID}/classlist`)
    .then((res) =>
      dispatch({
        type: GET_CLASSLIST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_CLASSLIST,
        payload: {},
      })
    );
};

// Classlist loading
export const setClasslistLoading = () => {
  return {
    type: CLASSLIST_LOADING,
  };
};
