import * as express from "express";
import * as bodyParser from "body-parser";
const path = require("path")

import * as routes from "./routes/index";

var app = express();

app.set("port", (process.env.PORT || 5000));

// Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));

// var env = process.env.NODE_ENV || 'development';
// if (env === 'development') {
//     app.use(errorHandler());
// }


app.get("*", function response(req, res) {
   res.sendFile(path.join(__dirname, "../public/index.html"));
 });


app.listen(app.get("port"), function() {
  console.log("tcm-home is running on port", app.get("port"));
});