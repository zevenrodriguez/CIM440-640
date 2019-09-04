var pointX = 0;
var pointY = 0;

var point2; // variable undefined

function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = height/2;

  console.log("pointX " + pointX + " pointY " + pointY);

  console.log(point2);
}

function draw() {
  // put drawing code here
  background(255);
  //pointX = 100;
  //pointY = 100;
  pointX = mouseX;
  pointY = mouseY;

  rect(pointX -100 ,pointY -100,200,200);
  ellipse(pointX, pointY, 10,10);
  ellipse(pointX + 20, pointY -20, 30,30);
  ellipse(pointX - 20, pointY -20, 30,30);

  // arc(x,y,width,height,start,end)
  arc(pointX,pointY + 10,50,50,0,PI);

  //ellipse(point2, point2, 10,10);

}//end of draw
