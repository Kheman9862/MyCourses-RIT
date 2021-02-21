// /:user_id/courses/:id/:weekId

import axios from "axios";

export const GET_WEEK_DATA = "GET_WEEK_DATA";
export const WEEK_LOADING = "WEEK_LOADING";

// Get week content
export const getWeek = (userID, courseID, weekID) => (dispatch) => {
  dispatch(setContentLoading());
  axios
    .get(`/api/user/${userID}/courses/${courseID}/${weekID}`)
    .then((res) =>
      dispatch({
        type: GET_WEEK_DATA,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_WEEK_DATA,
        payload: {},
      })
    );
};

// Week content loading
export const setContentLoading = () => {
  return {
    type: WEEK_LOADING,
  };
};
