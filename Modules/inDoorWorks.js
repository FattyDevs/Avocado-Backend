'use strict'

const IndoorData = require('../JSON-Data/IndoorData.json')

module.exports = {
    sportIndoorWorksHandler,
}

function sportIndoorWorksHandler(req,res){

    const indoorArray=IndoorData.results.map((item)=>{
        return new Indoor(item);
    });
    // console.log(indoorArray);
    res.send(indoorArray);
}


class Indoor{
    constructor(item){
        this.name = item.name,
        this.description = item.description,
        this.image = item.images[0].image,
        this.link = item.link
    }
}