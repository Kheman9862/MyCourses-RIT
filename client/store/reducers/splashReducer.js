import { SPLASH_VIEW } from "../actions/splashAction";

const initialState = {
  splashView: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SPLASH_VIEW:
      return {
        ...state,
        splashView: action.flag,
      };
    default:
      return state;
  }
};
