/* eslint-disable */
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";


import reducers from "../Redux/Reducer"
import * as types from "../Redux/ActionTypes";

const middleware = [thunk];

const appReducer = combineReducers({
  ...reducers,
});
const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

const pReducer = rootReducer;
const initialState = {};

const composedEnhancers = compose(applyMiddleware(...middleware));

const stores = createStore(pReducer, initialState, composedEnhancers);
export const store = stores;


