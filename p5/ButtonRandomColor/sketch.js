var button;
var r = 0;
var g = 0;
var b = 0;

function setup() {
  // put setup code here
  createCanvas(100, 100);
  button = createButton('click me');
  button.mousePressed(changeBG);
}

function draw() {
  // put drawing code here
  background(r,g,b);
}

function changeBG() {
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
}
