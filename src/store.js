import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers/index";

const store = configureStore({
  reducer: rootReducers,
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;

