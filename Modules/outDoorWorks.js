'use strict';
const axios = require("axios");
module.exports = {
    sportOutdoorWorksHandler,
};

function sportOutdoorWorksHandler(req,res){
let outDoorUrl='https://sports.api.decathlon.com/groups';
axios
.get(outDoorUrl)
.then((result)=>{
 
    const outdoorArray=result.data.data.map((item)=>{
        return new Outdoor(item);
    });
    console.log(outdoorArray);
    res.send(outdoorArray);
})
.catch((err) => {
  res.send(`there is an error in getting the data => ${err}`);
});
}
class Outdoor{
    constructor(item){
        this.description=item.attributes.description;
        this.name=item.attributes.name;
        this.slug=item.attributes.slug;
        // this.groups=item.relationships.
    }
}
