// api/user/:user_id/courses
import axios from "axios";

export const GET_MESSAGES = "GET_MESSAGES";
export const MESSAGES_LOADING = "MESSAGES_LOADING";

// Get Messages
export const getMessages = () => (dispatch) => {
  dispatch(setMessageLoading());
  axios
    .get(`/api/users`)
    .then((res) =>
      dispatch({
        type: GET_MESSAGES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_MESSAGES,
        payload: {},
      })
    );
};

// Message loading
export const setMessageLoading = () => {
  return {
    type: MESSAGES_LOADING,
  };
};
