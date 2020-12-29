console.log('webpack is working')
const test = require('./test.js');
const MovingObject = require('./moving_object.js');


window.mo = MovingObject.mo;

document.addEventListener('DOMContentLoaded', function () {
    const canvasEl = document.getElementById("canvas");
        canvasEl.height = 600; 
        canvasEl.width = 1000;

    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 1000, 600);
});