var a = 1;
var num1 = 3;
var b = 'b';
var word1 = "word";
var trueFalse = true;
var sentences = "I'm a sentence";

var charColor = "orange";
var eyeSize = 20;

var facePosX = 100;
var facePosY = 100;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(0);
  background(255,255,255);
  background("orange");
  background("#333333");

  console.log(a + num1);
  console.log(a-num1);
  console.log(a + b);
  //Single line comment
  //console.log(a * b);

  /*
  Block of comments
  */

  //this is only in setup scope, only available in setup
  var setupVariable = 5;
}

function draw() {
  background("white");
  facePosX = mouseX;
  facePosY = mouseY;
  // put drawing code here();
  stroke('black');
  strokeWeight(num1);
//does not work, setupVariable's scope is only in the setup.
//  strokeWeight(setupVariable);


  fill(charColor);
//eyes
  ellipse(facePosX + 50,facePosY,eyeSize,eyeSize);
  ellipse(facePosX + 110,facePosY,eyeSize,eyeSize);
  //mouth
  rect(facePosX,facePosY + 200,180,20);
//mole
  stroke('green');
  strokeWeight(5);
  point(width/2, height/2);

  line(facePosX,facePosY + 210,facePosX + 180,facePosY + 210);
//pacperson
  arc(facePosX + 100,facePosY +100,100,100,QUARTER_PI, TWO_PI - QUARTER_PI);


}

function mousePressed(){
  charColor = "blue";
}
