var bubble0;

function setup() {
  createCanvas(400, 400);
  bubble0 = new bubbles(random(width), random(height), 100)
}

function draw() {
  background(255);
  bubble0.display();
}

function bubbles(tempX, tempY, tempDiameter) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;

  this.display = function() {
    fill(100);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

}