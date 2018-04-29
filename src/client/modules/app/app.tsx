import * as React from "react";
import {
   BrowserRouter as Router,
   Link,
   match,
   Redirect
 } from "react-router-dom";

import { Route } from "react-router";

import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";

//import SVGInline from "react-svg-inline"
//const iconSVG = require("../static/img/logo.svg") as string;
//import * as iconSVG from "../static/img/logo.svg";


import { Home } from "./home";

export interface IAppProps { history: any; }

export const App: React.SFC<IAppProps> = (props) => {
        return <ConnectedRouter history={props.history}>
                  <div className="application-wrapper">
                     <div className="header">
                        <Link to="/">
                           <h1>Express-TS-Sass-Starter</h1>
                        </Link>
                        <nav>
                           <Link to="/projects">
                              Projects
                           </Link>
                        </nav>
                     </div>
                           <Route exact path="/" component={Home} />
                  </div>
               </ConnectedRouter>
    }