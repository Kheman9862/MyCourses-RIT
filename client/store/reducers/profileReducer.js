import { GET_PROFILE, PROFILE_LOADING } from "../actions/profileAction";

const initialState = {
  profile: null,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
