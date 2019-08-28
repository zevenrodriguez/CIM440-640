var mouthX = 80;
var mouthY = 200;

var eyeSize = 40;


function setup() {
  // put setup code here
  createCanvas(500, 500);
  background(0, 255, 0);
}

function draw() {
  // put drawing code here
  strokeWeight(1);
  //left eye
  //ellipse(100,100,20,20);
  //right eye
  //ellipse(140,100,20,20);

  //left eye
  ellipse(100, 100, eyeSize, eyeSize);
  //right eye
  ellipse(140, 100, eyeSize, eyeSize);

  //mouth
  //  rect(80,200,100,30);// rect starts drawing from top left hand corner
  rect(mouthX, mouthY, 100, 30);

  //mole
  strokeWeight(5);
  point(30, 27);

  //mouth line
  strokeWeight(1);
  line(80, 215, 180, 215);

  // width/2 center point of width, height/2 center point of height
  //console.log("width " + width);
  //console.log("height " + height);

  triangle(width / 2, height / 2, (width / 2) + 10, (height / 2) + 20, (width / 2) - 10, (height / 2) + 20);

  arc(50, 50, 50, 50, 0, PI); // 0 to 180
  arc(300, 300, 50, 50, 0, TWO_PI); //0-360
  arc(400, 400, 50, 50, PI + HALF_PI, 0);


}
