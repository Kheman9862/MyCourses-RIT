import { GET_WEEK_DATA, WEEK_LOADING } from "../actions/weekAction";

const initialState = {
  week: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEEK_DATA:
      return {
        ...state,
        week: action.payload,
        loading: false,
      };
    case WEEK_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
