import * as http from "http";
import * as url from "url";
import * as express from "express";
import * as bodyParser from "body-parser";

import * as routes from "./routes/index";

var app = express();

app.set('port', (process.env.PORT || 5000));

// Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../../public'));

var env = process.env.NODE_ENV || 'development';
// if (env === 'development') {
//     app.use(errorHandler());
// }


// Routes

app.get('/', routes.Index.index);

app.listen(app.get('port'), function() {
  console.log('app is running on port', app.get('port'));
});

export var App = app;