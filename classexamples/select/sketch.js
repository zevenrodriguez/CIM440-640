var curImage, sun, moon;

var selection, textInput, submitButton;

var numberOfImages = 0;
var currentSelection = "";

function preload() {
  sun = loadImage("assets/sun.png");
  moon = loadImage("assets/moon.png");
}

function setup() {
  // put setup code here
  createCanvas(400, 400);
  selection = createSelect();
  selection.position(10, 10);
  selection.option("sun");
  selection.option("moon");
  selection.changed(function() {
    if (selection.value() == "sun") {
      curImage = sun;
    } else if (selection.value() == "moon") {
      curImage = moon;
    }
  });

  curImage = sun;
}

function draw() {
  // put drawing code here
  background(255);
  image(curImage, 0, 0);
}
