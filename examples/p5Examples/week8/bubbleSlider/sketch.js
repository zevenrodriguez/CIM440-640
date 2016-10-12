var multiBubbles = [];

var bubbleSlider;
var prevBubbleSlider;

var sliderMax = 1000;

function setup() {
  createCanvas(1000, 1000);
  //bubble0 = new bubbles(random(width), random(height), 100);
  for (var i = 0; i < sliderMax/2; i++) {
    var newBubble = new bubbles(random(width), random(height), 100);
    multiBubbles.push(newBubble);
  }
  noStroke();

  bubbleSlider = createSlider(0, sliderMax, sliderMax / 2);
  bubbleSlider.position(20, 20);
}

function draw() {
  background(255);

  var currentBubbleSlider = bubbleSlider.value();
  console.log(currentBubbleSlider);
  if (currentBubbleSlider != prevBubbleSlider) {

    var change = currentBubbleSlider - prevBubbleSlider;
    if (change > 0) {

      for (var i = 0; i < abs(change); i++) {
        var newBubble = new bubbles(random(width), random(height), 100);
        multiBubbles.push(newBubble);
      }

    } else {
      for (var i = 0; i < abs(change); i++) {
        multiBubbles.pop();
      }

    }

    prevBubbleSlider = currentBubbleSlider;

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


  this.display = function() {
    fill(100, this.counter);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }



}