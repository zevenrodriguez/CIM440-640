var sun;

function preload(){
  sun = loadImage('assets/sun.png');
}

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  image(sun,100,100);
}
