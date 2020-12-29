const util = require("./util.js")
const MovingObject = require("./moving_object")

const Asteroid = function(color=grey, radius=8 ){
    this.color = color
    this.radius = radius
    
};



Util.inherits(Asteroid, MovingObject.MovingObject);
