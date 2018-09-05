var a = 1;
var num1 = 3;
var b = 'b';
var word1 = "word";
var trueFalse = true;
var sentences = "I'm a sentence";


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
  // put drawing code here();
  stroke('black');
  strokeWeight(num1);
//does not work, setupVariable's scope is only in the setup.
//  strokeWeight(setupVariable);


  fill('orange');
//eyes
  ellipse(120,120,50,50);
  ellipse(180,120,50,50);
  //mouth
  rect(120,320,180,20);
//mole
  stroke('green');
  strokeWeight(5);
  point(width/2, height/2);

  line(120,330,300,330);
//pacperson
  arc(100,200,100,100,QUARTER_PI, TWO_PI - QUARTER_PI);


}
