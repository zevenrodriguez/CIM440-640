var mouthX = 25;
var mouthY = 250;
var mouthW = 400;
var mouthH = 60;

var eye1X = 70;
var eye1Y = 70;

var eye2offset = 300;
var pupilOffset = 20;


function setup() {
    createCanvas(500,400);
    background(0,0,0);
    background(255,0,0);
    background(125);

    console.log("width: " + width + " " + "height: "+ height);

    noStroke();
}

function draw() {
    fill(255);
    //eye1
    // x , y , width, height
    ellipse(eye1X,eye1Y,100,100);
    fill(0,0,255);
    ellipse(eye1X, eye1Y + pupilOffset , 25,50);

    //eye2
    fill(255);
    ellipse(eye1X + eye2offset, eye1Y, 100,100);
    fill(0,0,255);
    ellipse(eye1X+eye2offset, eye1Y + pupilOffset, 25,50);

    fill(255);
    //nose
    triangle(width/2,height/2, (width/2) + 20,(height/2) + 20, (width/2) - 20,(height/2) + 20);


    fill(255);
    //mouth
    rect(mouthX, mouthY, mouthW, mouthH);
    stroke(125);
    strokeWeight(10);
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
    noStroke();

     //tongue
    fill('red')
    arc(width/2 + 100,275, 100,100, 0 , PI);

}
