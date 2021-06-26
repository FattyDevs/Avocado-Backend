'use strict';
require("dotenv").config(); 
const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
let PORT = process.env.PORT ||3010;
// mongoose.connect("mongodb://localhost:27017", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

  const {
    sportOutdoorWorksHandler,
  } = require('./Modules/outDoorWorks');

//http:localhost:3010
app.get("/", homeHandler);
function homeHandler(req, res) {
  res.send("Welcome in Home Route");
}
//http:localhost:3010/outdoor_workouts
app.get("/outdoor_workouts",sportOutdoorWorksHandler);


app.listen(process.env.PORT || 3010, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
