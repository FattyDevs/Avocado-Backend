

const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const home={};

const favFoodSchema = new mongoose.Schema({
      label: String,
      image: String,
      url: String,
      yields:String,
      calories: String,
      mealType :String,
    });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    height: Number,
    weight: Number,
    favSport: String,
    clss: String ,
    foods: [favFoodSchema]
});

const User = mongoose.model('user', userSchema);

const favFoodModal = mongoose.model('Food', favFoodSchema);
const users=[];
home.addFavFood=(req,res)=>{
    // console.log('string')
    const {label,email,image,url,yields,calories,mealType}=req.body;
    // console.log(label)
    // console.log(users)
    // // consol.log("userData[0]")
    // console.log(users.foods)
    const user=users.find((obj)=>email==obj.email)
    // console.log(user)
   
  if(user==undefined){
    console.log('error');
}
else
{ 
    user.foods.push({
           label:String(label),
           image:String(image),
           url:String(url),
           yields:String(yields),
           calories:String(calories),
           mealType:String(mealType),

        
       }) 
    user.save(user);
   
    res.status(200).send(user.foods)

}
  }
  home.deltedFood=(req,res)=>{
    const email=req.query;
    console.log(email)

    const index=Number(req.params.index);
    console.log(index)
    // console.log(users)
    // console.log(users[0].foods)
    const user=users.find((obj)=>Object.values(email)==obj.email)
    console.log(user)

   
    
    if(user.foods==undefined){
        console.log('error');
        // res.send('error')
    }else{
        const newData=user.foods.filter((food,idx)=>{
            if(idx !== index){
               return food;
            }
        })
        user.foods=newData;
        user.save(user);
        console.log('after',user)
        res.send(user)
    }
}

    



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
        user.clss=String(clss);
        console.log(user);
    //  console.log(user);
      
      user.save(user);
     console.log(users);
     res.status(200).send(console.log(user));
    }
   
}
  module.exports =home;