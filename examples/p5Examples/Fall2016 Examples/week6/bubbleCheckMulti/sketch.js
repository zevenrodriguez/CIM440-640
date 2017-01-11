var bubble0;
var bubbleImg;

var multiBubbles = [];

function setup() {
  createCanvas(400, 400);
  bubbleImg = loadImage("assets/bubble.png");
  //bubble0 = new bubbles(random(width), random(height), 100, bubbleImg);

  for (var i = 0; i < 10; i++) {
    var newBubble = new bubbles(random(width), random(height), 100, bubbleImg);
    multiBubbles.push(newBubble);
  }

  //console.log(multiBubbles);
}

function draw() {
  background(255);

  for (var i = 0; i < multiBubbles.length; i++) {
    var curBubbleState = multiBubbles[i].check(mouseX, mouseY);
    multiBubbles[i].display(curBubbleState);
    multiBubbles[i].update(curBubbleState);
  }

}

function bubbles(tempX, tempY, tempDiameter, tempImg) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.img = tempImg;

  this.display = function(showHide) {
    if (showHide == false) {
      fill(100);
      //ellipse(this.x, this.y, this.diameter, this.diameter);
      imageMode(CENTER);
      image(this.img, this.x, this.y, this.diameter, this.diameter);
    }
  }

  this.check = function(userX, userY) {

    var mouseDist = int(dist(userX, userY, this.x, this.y));

    if (mouseDist < this.diameter / 2) {
      console.log("Hit");
      return true;
    } else {
      return false;
    }

  }

  this.update = function(runUpdate) {
    if (runUpdate == true) {
      this.x = int(random(width));
      this.y = int(random(height));
    }
  }

}