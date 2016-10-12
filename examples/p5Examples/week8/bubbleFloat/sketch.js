var currentFade;
var multiBubbles = [];

function setup() {
  createCanvas(1000, 1000);
  //bubble0 = new bubbles(random(width), random(height), 100);
  for (var i = 0; i < 10; i++) {
    var newBubble = new bubbles(random(width), random(height), random(50, 100));
    multiBubbles.push(newBubble);
  }
  noStroke();
}

function draw() {
  background(255);

  for (var i = 0; i < multiBubbles.length; i++) {

    multiBubbles[i].move();
    multiBubbles[i].check(i);
    multiBubbles[i].display();

  }

}

function bubbles(tempX, tempY, tempDiameter) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.counter = 100;

  this.xspeed = random(1, 6);
  this.yspeed = random(1, 6);

  this.display = function() {
    fill(100, this.counter);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  this.move = function() {

  
    this.x += this.xspeed;
    this.y += this.yspeed;
    
    if (this.x > width - this.diameter/2 || this.x < this.diameter/2) {
      this.xspeed = -this.xspeed;
    }
    
    if (this.y > height - this.diameter/2 || this.y < this.diameter/2) {
      this.yspeed = -this.yspeed;
    }

  }



  this.update = function(runUpdate) {
    if (runUpdate == true) {
      this.x = int(random(width));
      this.y = int(random(height));
    }
  }

  this.check = function(currentIndex) {
    for (var i = 0; i < multiBubbles.length; i++) {

      if (i != currentIndex) {
        var bubbleDistance = dist(this.x + this.diameter/2, this.y + this.diameter/2, multiBubbles[i].x + this.diameter/2, multiBubbles[i].y + this.diameter/2);
        if (bubbleDistance < this.diameter) {
          this.update(true);
          console.log(bubbleDistance);
        }
      }
    }
  }

}