import { GET_CLASSLIST, CLASSLIST_LOADING } from "../actions/classListAction";

const initialState = {
  classlist: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CLASSLIST:
      return {
        ...state,
        classlist: action.payload,
        loading: false,
      };
    case CLASSLIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
