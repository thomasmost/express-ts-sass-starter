
console.log("Bundling Successful")

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import { Themiscyra } from "./reducers";

//import "./client/sass/index.scss";

import { App } from "./modules/app/app";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";

import createHistory from "history/createBrowserHistory"

// Polyfills
var Promise = require( "promise-polyfill" ); 

// To add to window
if (!(window as any).Promise) {
 (window as any).Promise = Promise;
}

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    //...Themiscyra,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

export abstract class WebApp {
   public static initialize ()
   {
      ReactDOM.render(
          <Provider store={store}>
              <App history={history} />
          </Provider>,
          document.getElementById("app")
      );
   }
}
