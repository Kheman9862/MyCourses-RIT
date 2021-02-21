import { GET_CONTENT,CONTENT_LOADING, ADD_CONTENT_ID } from "../actions/courseContentAction";

const initialState = {
  content: {},
  loading: true,
  contentID:null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };
    case CONTENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_CONTENT_ID:{
      return{
        ...state,
        contentID:action.payload
      }
    }
    default:
      return state;
  }
};
