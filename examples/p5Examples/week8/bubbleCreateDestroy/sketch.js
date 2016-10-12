var currentFade;
var multiBubbles = [];

var prevMillis = 0;
var interval = 100;

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

  if (millis() - prevMillis >= interval) {
    var randomToggle = int(random(2));
    if (randomToggle == 0) {
      console.log("pushing");
      var newBubble = new bubbles(random(width), random(height), 100);
      multiBubbles.push(newBubble);
    } else {
      if (multiBubbles.length > 0) {
        console.log("poping");
        multiBubbles.pop();
      }
    }


    prevMillis = millis();
  }

  for (var i = 0; i < multiBubbles.length; i++) {


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

 

}