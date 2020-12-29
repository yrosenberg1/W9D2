const MovingObject = function (pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
}




const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
})





MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
  
    ctx.arc(
      this.pos[0], 
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
  
    ctx.fill();
  };

module.exports = {
    MovingObject,
    mo,
}