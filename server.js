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
// app.get("/", homeHandler);
// function homeHandler(req, res) {
//   res.send("Welcome in Home Route");
// }




const userSchema = require('./Modules/UsersScheema')
// localhost:3010/
app.get('/', userSchema.home);

//localhost:3010/newUser
app.post('/newUser',userSchema.usersInfo);


// app.get('/comData', userSchema.getComponentsData);

//http:localhost:3010/outdoor_workouts
app.get("/outdoor_workouts",sportOutdoorWorksHandler);

//http:localhost:3010/indoor_workouts
app.get("/indoor_workouts", sportIndoorWorksHandler);









//http://localhost:3010/test
app.post('/newClass',userSchema.addSportClass);


// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/sportClass", {useNewUrlParser: true, useUnifiedTopology: true});

// const sportClassSchema = new mongoose.Schema({
//   name: String,
//   clsses: String,
//   email:String,
  
// });

// const UserSchema = new mongoose.Schema({
//   email: String,
//   sports: [sportClassSchema]
// });
// const sportClassModal = mongoose.model('Sport', sportClassSchema);
// const userSportClassModal = mongoose.model('userSport', UserSchema);

// function seedUser(){
//   const userEmail = new userSportClassModal({
//       email : "asailik1993@gmail.com",
//       sports:[
//         {
//           name: "roaa",
//           clsses: "clsses",
//           email:"asailik1993@gmail.com",
//        }
//        ]
//     })
//     userEmail.save()
//   }
  // seedUser()

// console.log(userSportClassModal);







//http://localhost:3010/deletesport
app.delete('/deletesport/:index',deltedClass);
function deltedClass(req,res){
  const email=req.query;
  const index=Number(req.params.index);
  userSportClassModal.find({email:"asailik1993@gmail.com"},function(err,userData){
      if(err){
          res.send('error')
      }else{
          const newData=userData[0].sports.filter((sport,idx)=>{
              if(idx !== index){
                 return sport;
              }
          })
          userData[0].sports=newData;
          userData[0].save();
          res.send(userData[0].sports)
      }
  })
}


app.listen(process.env.PORT || 3010, () => {
    console.log(`Listening on PORT ${PORT}`);
  });










