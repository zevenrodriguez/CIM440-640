var mouthX = 25;
var mouthY = 250;
var mouthW = 400;
var mouthH = 60;

var eye1X = 70;
var eye1Y = 70;

var eye2offset = 300;
var pupilOffset = 20;

var backgroundColor = 'yellow';

var randNum = 0;

var mapX = 0;


function setup() {
    createCanvas(500,400);
    background(0,0,0);
    background(255,0,0);
    background(125);

    console.log("width: " + width + " " + "height: "+ height);

    noStroke();
    randNum = random(256); //0-255
    console.log(randNum);



}

function draw() {
frameRate(60);
    background(backgroundColor);
    //background(randNum, 100,100);
    mapX = map(mouseX,0,width,-10,10);

    //ellipse(random(width), random(height), 50,50);



    fill(255);
    //eye1
    // x , y , width, height
    ellipse(eye1X,eye1Y,100,100);
    fill(0,0,255);
    ellipse(eye1X + mapX, eye1Y + pupilOffset , 25,50);

    //eye2
    fill(255);
    ellipse(eye1X + eye2offset, eye1Y, 100,100);
    fill(0,0,255);
    ellipse(eye1X+eye2offset+mapX, eye1Y + pupilOffset, 25,50);

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
    //fill('red')
   // randNum = random(256); //0-255
    //console.log(randNum);

    fill(randNum,0,0);
    arc(mapX+width/2 + 100,275, 100,100, 0 , PI);

    //mouse cursor
    ellipse(mouseX,mouseY,10,10);

}


function mousePressed(){
    //background('yellow');
    backgroundColor = 'pink';
    backgroundColor = "rgb(123,54,65)";
    //backgroundColor = "145,0,255";
    randNum = random(256); //0-255
}

function mouseReleased(){
    backgroundColor = 'blue';
}







