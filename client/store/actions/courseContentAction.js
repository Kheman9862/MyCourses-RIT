// api/user/:user_id/courses/:id

import axios from "axios";

export const GET_CONTENT = "GET_CONTENT";
export const CONTENT_LOADING = "CONTENT_LOADING";
export const ADD_CONTENT_ID = "ADD_CONTENT_ID";

// Get Courses
export const getContent = (userID,courseID) => (dispatch) => {
  dispatch(setContentLoading());
  axios
    .get(`/api/user/${userID}/courses/${courseID}`)
    .then((res) =>
      dispatch({
        type: GET_CONTENT,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_CONTENT,
        payload: {},
      })
    );
};

// Courses loading
export const setContentLoading = () => {
  return {
    type: CONTENT_LOADING,
  };
};


export const addContentID=(contentID)=>{
  return{
    type:ADD_CONTENT_ID,
    payload:contentID
  }
}
