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

  const {
    sportIndoorWorksHandler,
  } = require('./Modules/inDoorWorks');

//http:localhost:3010
app.get("/", homeHandler);
function homeHandler(req, res) {
  res.send("Welcome in Home Route");
}
const userSchema = require('./Modules/UsersScheema')
// localhost:3010/
app.get('/', userSchema.home);

//localhost:3010/newUser
app.post('/newUser',userSchema.usersInfo);

//http:localhost:3010/outdoor_workouts
app.get("/outdoor_workouts",sportOutdoorWorksHandler);

//http:localhost:3010/indoor_workouts
app.get("/indoor_workouts", sportIndoorWorksHandler);


app.listen(process.env.PORT || 3010, () => {
    console.log(`Listening on PORT ${PORT}`);
  });










