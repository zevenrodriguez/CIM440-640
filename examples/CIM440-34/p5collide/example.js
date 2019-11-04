var hit = false;
function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(255);
	ellipse(200,200,100,100);
	ellipse(mouseX,mouseY,150,150);

	hit = collideCircleCircle(mouseX,mouseY,150,200,200,100)

	print("colliding? " + hit);
}
