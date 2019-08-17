function setup() {
  // put setup code here
  createCanvas(500,500);
  background("black");
  background(255);
  background(0);
  background(255,255,255);
  background(0,0,0);
  background(255,0,0);

}

function draw() {
  // put drawing code here
  background(255);
  strokeWeight(1);
  fill(255,255,255);
  stroke(0,255,0);
  //first eye
  ellipse(155,175,25,30);
  fill(0);
  //first pupil
  ellipse(150,175,10,15);

  fill(255,0,0);
  // head
  ellipse(200,200,100,100);

  fill("brown");
  // mouth
  rect(100,200,75,20);
  rect(100,230,75,10);

  //nose
  ellipse(100,200,10,10);

  strokeWeight(10);
  point(100,200);

  fill(255);
  strokeWeight(1);
  // second eye
  ellipse(170,175,25,30);

  fill(0);
  // second pupil
  ellipse(165,175,10,15);

  fill("brown");
  //neck
  rect(175,250,50,50);

  // body
  rect(200,275,150,100,10);

  //ears
  triangle(175,150,200,100,200,150);
  triangle(175 + 10,150,200 + 10,100,200 + 10,150);

  // tail
  strokeWeight(15);
  line(350,275, 350+50,275-50);

  noFill();
  strokeWeight(5);
  angleMode(DEGREES);
  arc(200,400,25,50,135,270);
  arc(225,400,25,50,135,270);
  arc(325,400,25,50,135,270);
  arc(350,400,25,50,135,270);
}






//end of code
