import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { HYDRATE, createWrapper } from 'next-redux-wrapper'

import reducers from "./reducers";

const reduxDevtools =
  typeof window !== "undefined" && process.env.NODE_ENV !== "production"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f: any) => f;

const enhancers = compose(applyMiddleware(thunk), reduxDevtools);

const initStore = () => {
  return createStore(reducers, enhancers)
}

export const wrapper = createWrapper(initStore)

