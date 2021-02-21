import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./store/reducers/authReducer";
import splashReducer from "./store/reducers/splashReducer";
import profileReducer from "./store/reducers/profileReducer";
import axios from "axios";
import CredentialNavigation from "./navigation/credentialNavigation";
import keys from "./utils/keys";
import courseReducer from "./store/reducers/courseReducer";
import courseContentReducer from "./store/reducers/courseContentReducer";

axios.defaults.baseURL = keys.baseURL;

const rootReducer = combineReducers({
  auth: authReducer,
  splash: splashReducer,
  profile: profileReducer,
  course: courseReducer,
  content:courseContentReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <CredentialNavigation />
    </Provider>
  );
}
