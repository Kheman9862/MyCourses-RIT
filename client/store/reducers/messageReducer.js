import { MESSAGES_LOADING, GET_MESSAGES } from "../actions/messagingAction";

const initialState = {
  messages: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };
    case MESSAGES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
