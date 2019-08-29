var eyeSize = 40;

var mouthX = 80;
var mouthY = 205;


function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0,255,0);
}

function draw() {
  // put drawing code here
  strokeWeight(1);
  ellipse(100,100,eyeSize,eyeSize);//left eye

  ellipse(140,100,eyeSize,eyeSize);//right eye

  rect(mouthX,mouthY,100,30);//mouth

  strokeWeight(5);
  point(72,382);//mole

  strokeWeight(1);
  line(80,215,180,215);//mouth split

  // width and height
  //console.log("width " + width);
  //console.log("height " + height);

triangle(width/2,height/2,width/2 + 10, height/2 + 10, width/2 - 10, height/2 + 10);

arc(300,300,50,50,0,PI);
arc(400,400,50,50,PI+HALF_PI,0);
arc(300,150,50,50,0,TWO_PI)




}//end of draw
