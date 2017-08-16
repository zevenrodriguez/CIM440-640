var mouthX = 25;
var mouthY = 250;
var mouthW = 400;
var mouthH = 60;

function setup() {
    createCanvas(500,400);
    background(0,0,0);
    background(255,0,0);
    background(125);

    console.log("width: " + width + " " + "height: "+ height);
}

function draw() {
    // x , y , width, height
    ellipse(70,70,100,100);

    ellipse(width/2,height/2,50,50);

    rect(mouthX, mouthY, mouthW, mouthH);
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
}
