

const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const home={};

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    height: Number,
    weight: Number,
    favSport: String,
    clss: [{clss:"String"},] ,

});

const User = mongoose.model('user', userSchema);


const users=[];

home.usersInfo=(req,res)=>{

    // console.log("inside saving function");
    const {name, email, height, weight, age, favSport}= req.body;
    const newUser= new User({
        name: name,
        email: email,
        age:Number(age),
        height: Number(height), 
        weight: Number(weight),
        favSport:favSport
    });
    // console.log(newUser);
    try{
   
    users.push(newUser); 
    newUser.save();
    res.status(200).send(users);
    // console.log(newUser);
  
   
    // console.log("pass");
 }
    catch (err) {
        res.status(500).send(`${err}: ERROR IN CHECKING USER DATA`);
        // console.log("catch");
    }
};
// console.log("Users Data ", users);
home.home =(req, res)=>{
    
        // console.log(users);
        res.status(200).send(users);
}






home.addSportClass=(req,res)=>{
    console.log(users);
    const {clss,email}=req.body;
    console.log(clss);
    console.log(email);
    // seedUser(name,email,clsses)
    console.log("User ", users);
   const user=users.find(userObj=>userObj.email==email);
console.log(user);
    
      
      if(user == undefined){
          console.log("ERROR");
      }else{
        console.log("inside else");
        user.clss=user.clss.push(String(clss));
        console.log(user);
    //  console.log(user);
      
      user.save(user);
     console.log(users);
     res.status(200).send(console.log(user));
    }
   
}

'/comData'




  module.exports =home;