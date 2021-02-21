import { GET_COURSES, COURSE_LOADING } from "../actions/courseAction";

const initialState = {
  courses: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
        loading: false,
      };
    case COURSE_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
