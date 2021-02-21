// api/user/:user_id/courses
import axios from "axios";

export const GET_COURSES = "GET_COURSES";
export const COURSE_LOADING = "COURSE_LOADING";

// Get Courses
export const getCourses = (userID) => (dispatch) => {
  dispatch(setCourseLoading());
  axios
    .get(`/api/user/${userID}/courses`)
    .then((res) =>
      dispatch({
        type: GET_COURSES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_COURSES,
        payload: {},
      })
    );
};

// Courses loading
export const setCourseLoading = () => {
  return {
    type: COURSE_LOADING,
  };
};
