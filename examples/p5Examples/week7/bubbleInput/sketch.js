var currentFade;
var multiBubbles = [];

var prevMillis = 0;
var interval = 100;

var input, button, createBubbles;


function setup() {
  createCanvas(1000, 1000);
  //bubble0 = new bubbles(random(width), random(height), 100);
  for (var i = 0; i < 10; i++) {
    var newBubble = new bubbles(random(width), random(height), 100);
    multiBubbles.push(newBubble);
  }
  noStroke();
  
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(150, 65);
  button.mousePressed(createBubbles);
  
  
}

function draw() {
  background(255);

  for (var i = 0; i < multiBubbles.length; i++) {

    multiBubbles[i].display();

  }

}

function createBubbles(){
  var number = input.value();
  
  for(var i = 0; i < number; i++){
  var newBubble = new bubbles(random(width), random(height), 100);
  multiBubbles.push(newBubble);
  }
  input.value('');
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