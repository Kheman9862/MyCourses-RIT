import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./store/reducers/authReducer";
import splashReducer from "./store/reducers/splashReducer";
import axios from "axios";
import CredentialNavigation from "./navigation/credentialNavigation";
import keys from "./utils/keys";


axios.defaults.baseURL = keys.baseURL;

const rootReducer = combineReducers({
  auth: authReducer,

})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <CredentialNavigation />
    </Provider>
  );
}
