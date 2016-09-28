var num = 100;
var num1 = 1;
var word = "hello";
var word1 = "goodbye";

function setup() {
  createCanvas(500,500);
}

function draw() {
  //eyes
  ellipse(50,50,100,100);
  ellipse(150, 50, 100,100);
  
  //pupils
  ellipse(50,50,50,50);
  ellipse(150,50,50,50);
  
  //nose
  rect(125,125,30,30);
  
  //mouth
  rect(50,200,200,200, 0,20,50,20);
  line(50,300, 250,300);
  line(125,200, 125,400);
  line(175,200, 175,400);
  
  //console.log(num);
  /*
  triangle(30, 75, 58, 20, 86, 75);
  quad(38, 31, 86, 20, 69, 63, 30, 76);
  arc(50, 55, 50, 50, 0, HALF_PI);
  */
}