"use strict";

var threerest = require('threerest');

import * as ServiceHelloWorld from "./services/serviceHelloWorld";
import * as ServiceLeftArm from "./services/serviceLeftArm";

import express from "express";

var app = express();

app.get("/", function(req, res){
  res.send("Les ressources disponibles sont /helloworld /left_arm ...");
});

// load the service Test
threerest.ServiceLoader.loadService(app, new ServiceHelloWorld.default());
threerest.ServiceLoader.loadService(app, new ServiceLeftArm.default());

app.listen(8080, () => {console.log("Express start...");});

