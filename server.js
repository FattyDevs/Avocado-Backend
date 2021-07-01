'use strict';
require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const app = express();
const userSchema = require('./Modules/UsersScheema');
// const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
// app.use(express.json());

const PORT = 3010;

app.post("/addFood",userSchema.addFavFood)

app.delete('/deleteFood/:index',userSchema.deltedFood);
// mongoose.connect("mongodb://localhost:27017", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   const {
//     sportOutdoorWorksHandler,
//   } = require('./Modules/outDoorWorks');

// //http:localhost:3010
// app.get("/", homeHandler);
// function homeHandler(req, res) {
//   res.send("Welcome in Home Route");
// }
// //http:localhost:3010/outdoor_workouts
// app.get("/outdoor_workouts",sportOutdoorWorksHandler);




  //////////////


// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/favFood", {useNewUrlParser: true, useUnifiedTopology: true});

// const favFoodSchema = new mongoose.Schema({
//   label: String,
//   image: String,
//   url: String,
//   yields:String,
//   calories: String,
//   mealType :String,
// });
// const UserSchema = new mongoose.Schema({
//   email: String,
//   foods: [favFoodSchema]
// });

// const favFoodModal = mongoose.model('Food', favFoodSchema);
// const userFoodModal = mongoose.model('userFood', UserSchema);


// function seedingFavFood(){
//   const userFavFood = new favFoodModal({
//     label: 'hhh',
//     image: 'bjb',
//     url: 'bkjbkj',
//     yields:'bkb',
//     calories:'bbkj',
//     mealType :'bb'
//   })
//   userFavFood.save()
// }

// seedingFavFood()

// function seedUser(){
//   const userEmail = new userFoodModal({
//       email : "asailik1993@gmail.com",
//       foods:[
//         {
//       label: 'hhh',
//       image: 'bjb',
//       url: 'bkjbkj',
//       yields:'bkb',
//       calories:'bbkj',
//       mealType :'bb'
    
//        }
//        ]
  
    
//     })
//     userEmail.save()
//   }


// seedUser()






// function getfood (req,res){
//   userFoodModal.find({email:"asailik1993@gmail.com"},function(err,userData){
//     if(err){
//       console.log('error');
//   }
//   else
//   {
      
//       res.send(userData[0].foods);
//   }

//   }) 
// }

// console.log(userFavFood.foods)
// function addFavFood(req,res){
//   const {label,image,url,yields,calories,mealType}=req.body;
//   // consol.log("userData[0]")
//   userFoodModal.find({email:'asailik1993@gmail.com'},function(err,userData){
   
//     if(err){
//         console.log('error');
//     }
//     else
//     { 
//         userData[0].foods.push({
//                label:label,
//                image:image,
//                url:url,
//                yields:yields,
//                calories:calories,
//                mealType:mealType,

            
//            }) 
//         userData[0].save();
        
//         res.send(userData[0].foods)

//     }
// })
// }
// function deltedFood(req,res){
//   const email=req.query;
//   const index=Number(req.params.index);
//   userFoodModal.find({email:"asailik1993@gmail.com"},function(err,userData){
//       if(err){
//           res.send('error')
//       }else{
//           const newData=userData[0].foods.filter((food,idx)=>{
//               if(idx !== index){
//                  return food;
//               }
//           })
//           userData[0].foods=newData;
//           userData[0].save();
//           res.send(userData[0].foods)
//       }
//   })
// }

// app.listen(3010, () => {
//   console.log(`Listening on PORT ${PORT}`);
// });

  const {
    sportIndoorWorksHandler,
  } = require('./Modules/inDoorWorks');



//http:localhost:3010
// app.get("/", homeHandler);
// function homeHandler(req, res) {
//   res.send("Welcome in Home Route");
// }





// localhost:3010/
app.get('/', userSchema.home);

//localhost:3010/newUser
app.post('/newUser',userSchema.usersInfo);


// app.get('/comData', userSchema.getComponentsData);

//http:localhost:3010/outdoor_workouts
// app.get("/outdoor_workouts",sportOutdoorWorksHandler);

//http:localhost:3010/indoor_workouts
app.get("/indoor_workouts", sportIndoorWorksHandler);









//http://localhost:3010/test
app.post('/newClass',userSchema.addSportClass);
app.listen(process.env.PORT || 3010, () => {
  console.log(`Listening on PORT ${PORT}`);
});


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
// app.delete('/deletesport/:index',deltedClass);
// function deltedClass(req,res){
//   const email=req.query;
//   const index=Number(req.params.index);
//   userSportClassModal.find({email:"asailik1993@gmail.com"},function(err,userData){
//       if(err){
//           res.send('error')
//       }else{
//           const newData=userData[0].sports.filter((sport,idx)=>{
//               if(idx !== index){
//                  return sport;
//               }
//           })
//           userData[0].sports=newData;
//           userData[0].save();
//           res.send(userData[0].sports)
//       }
//   })
// }













