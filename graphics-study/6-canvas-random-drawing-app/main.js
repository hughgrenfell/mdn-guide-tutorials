// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to pick a random colour modifier

function randomModifier() {
    
    let colours = ['red', 'green', 'blue'];

    return colours[Math.floor(Math.random()*colours.length)];
}

// function to generate random colour

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {

    constructor(x, y, velX, velY, colour, oldColour, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.colour = colour;
        this.oldColour = oldColour;
        this.size = size;

        this.red = parseInt(this.colour.substring(4, this.colour.length-1).replace(/ /g, '').split(',')[0]);
        this.green = parseInt(this.colour.substring(4, this.colour.length-1).replace(/ /g, '').split(',')[1]);
        this.blue = parseInt(this.colour.substring(4, this.colour.length-1).replace(/ /g, '').split(',')[2]);

        this.oldred = parseInt(this.oldColour.substring(4, this.oldColour.length-1).replace(/ /g, '').split(',')[0]);
        this.oldgreen = parseInt(this.oldColour.substring(4, this.oldColour.length-1).replace(/ /g, '').split(',')[1]);
        this.oldblue = parseInt(this.oldColour.substring(4, this.oldColour.length-1).replace(/ /g, '').split(',')[2]);
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.colour;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }

        if((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }

        if((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }

        if((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    colourVary() {
        
        let colourChange = randomModifier();
        let oldColourChange = "old" + colourChange;

        if((this[colourChange] > this[oldColourChange] && this[colourChange] < 255) || (this[colourChange] <= 0)) {
            this[oldColourChange] = this[colourChange];
            this[colourChange] = this[colourChange] + 1;
        } else if((this[colourChange] >= 255) || (this[colourChange] < this[oldColourChange] && this[colourChange] > 0)) {
            this[oldColourChange] = this[colourChange];
            this[colourChange] = this[colourChange] - 1; 
        } 

        this.colour = `rgb(${this.red}, ${this.green}, ${this.blue})`;
        console.log(this.colour);
    }
    
}

const balls = [];

while (balls.length < 3) {
    const size = random(10,20);
    const ball = new Ball(
        //ball position always drawn at least one ball width
        //away from the edge of the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        "rgb(0,0,0)",
        size
    );

    balls.push(ball);
}

const size = random(10,20);
const ball = new Ball(
    //ball position always drawn at least one ball width
    //away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    "rgb(0,0,0)",
    size
);

function loop() {

    ctx.fillStyle = "rgba(0, 0, 0, 0.0)";
    ctx.fillRect(0, 0, width, height);

    for(const ball of balls) {
        ball.draw();
        ball.update();
        ball.colourVary();
    }

    requestAnimationFrame(loop);
}

loop();