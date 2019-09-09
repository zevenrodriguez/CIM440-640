var pointX = 0;
var pointY = 0;

function setup() {
  // put setup code here
  createCanvas(400,400);
  pointX = width/2;
  pointY = height/2;
  console.log("pointX " + pointX + " pointY " + pointY );
}

function draw() {
  // put drawing code here
  background(255);
  pointX = mouseX;
  pointY = mouseY;

  console.log("pointX " + pointX + " pointY " + pointY );

  rect(pointX-100,pointY-100,200,200);

  ellipse(pointX,pointY, 10,10);//nose

  ellipse(pointX + 20,pointY -20,30,30);// right eye
  ellipse(pointX - 20, pointY -20, 30,30);//left eye
  arc(pointX,pointY + 10,50,50,0,PI);




}// end of draw
