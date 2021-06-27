'use strict';
require("dotenv").config(); 
const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
let PORT = process.env.PORT ||3010;
app.post("/addFood",addFavFood)
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

  //////////////


  const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/favFood", {useNewUrlParser: true, useUnifiedTopology: true});

const favFoodSchema = new mongoose.Schema({
  label: String,
  image: String,
  url: String,
  yield:String,
  calories: String,
  mealType :String,
});
const UserSchema = new mongoose.Schema({
  email: String,
  foods: [favFoodSchema]
});

const userFoodModal = mongoose.model('userFood', UserSchema);
const favFoodModal = mongoose.model('Food', favFoodSchema);

function seedingFavFood(){
  const userFavFood = new favFoodModal({
    label: 'hhh',
    image: 'bjb',
    url: 'bkjbkj',
    yield:'bkb',
    calories:'bbkj',
    mealType :'bb'
  })
  userFavFood.save()
}

// seedingFavFood()

function seedUser(){
  const userEmail = new userFoodModal({
      email : "asailik1993@gmail.com",
      foods:[{
      label: 'hhh',
      image: 'bjb',
      url: 'bkjbkj',
      yield:'bkb',
      calories:'bbkj',
      mealType :'bb'
    
       } ]
  
    
    })
    userEmail.save()
  }


seedUser()








// console.log(userFavFood.foods)
function addFavFood(req,res){
  const {label,image,url,yield,calories,mealType}=req.body;

  favFoodModal.find({email:email},function(err,userData){
    if(err){
        console.log('error');
    }
    else
    { 
        userData[0].foods.push({
               label:label,
               image:image,
               url:url,
               yield:yield,
               calories:calories,
               mealType:mealType,

            
           }) 
        userData[0].save();
        res.send(userData[0].foods)
    }
})
}



