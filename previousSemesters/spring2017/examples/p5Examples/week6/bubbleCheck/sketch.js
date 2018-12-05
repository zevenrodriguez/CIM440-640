var bubble0;
var bubbleImg;
function setup() {
  createCanvas(400, 400);
  bubbleImg = loadImage("assets/bubble.png");
  bubble0 = new bubbles(random(width), random(height), 100, bubbleImg);
}

function draw() {
  background(255);

  var curBubbleState = bubble0.check(mouseX, mouseY);
  bubble0.display(curBubbleState);
  bubble0.update(curBubbleState);

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
      this.x = random(width);
      this.y = random(height);
    }
  }

}