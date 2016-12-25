"use strict";

import * as express from "express";

module Route {

  export class Index {

    public static index(req: express.Request, res: express.Response, next: express.NextFunction) {
      //render page
        res.sendFile('index.html', {root: __dirname + '../public/'}) //Our main application, including client.js, is hooked into index.html
    }
  }
}

export = Route;