var currentFade;
var multiBubbles = [];

function setup() {
  createCanvas(1000, 1000);
  //bubble0 = new bubbles(random(width), random(height), 100);
  for (var i = 0; i < 10; i++) {
    var newBubble = new bubbles(random(width), random(height), 100);
    multiBubbles.push(newBubble);
  }
  noStroke();
}

function draw() {
  background(255);

  for (var i = 0; i < multiBubbles.length; i++) {

    multiBubbles[i].move();
    multiBubbles[i].check(multiBubbles, i);
    multiBubbles[i].display();

  }
  
  



}

function bubbles(tempX, tempY, tempDiameter) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.counter = 100;
  this.fadeDone = false;
  this.speed = 0.05;


  this.display = function() {
    fill(100, this.counter);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  this.move = function() {
    this.x = this.x + (this.speed * random(-50, 50));
    this.y = this.y + (this.speed * random(-50, 50));

  }

  this.fade = function(upDown) {


    if (upDown == "up") {
      this.counter++;
      if (this.counter == 255) {
        this.counter = 255;
        this.fadeDone = true;
      }
    }

    if (upDown == "down") {
      this.counter--;
      if (this.counter == 0) {
        this.counter = 0;
        this.fadeDone = true;
      }
    }

  }

  this.update = function(runUpdate) {
    if (runUpdate == true) {
      this.x = int(random(width));
      this.y = int(random(height));
    }
  }

  this.check = function(bubbleArray, currentIndex) {
    for (var i = 0; i < bubbleArray.length; i++) {
      if (this.x < 20 || this.x > (width - 20)) {
        this.update(true);
      }

      if (this.y < 20 || this.y > (height - 20)) {
        this.update(true);
      }

      if (i != currentIndex) {
        var bubbleDistance = dist(this.x, this.y, bubbleArray[i].x, bubbleArray[i].y);
        if (bubbleDistance < 80) {
          this.update(true);
          console.log(bubbleDistance);

        }
      }
    }
  }

}