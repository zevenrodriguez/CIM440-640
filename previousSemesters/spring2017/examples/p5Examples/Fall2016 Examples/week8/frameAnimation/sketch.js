var frameAmounts = 4;
var frameArray = [];
var currentFrame = 0;

function preload() {
  for (var frames = 0; frames < frameAmounts; frames++) {
    var frameString = "assests/Thatwasclose" + frames + ".jpg";
    frameArray[frames] = loadImage(frameString);
  }
}

function setup() {
  createCanvas(500, 500);  
  frameRate(1);
}

function draw() {
  image(frameArray[currentFrame], 0, 0);
  currentFrame++; // Next frame  
  if (currentFrame == frameArray.length) {
    currentFrame = 0;
    // Return to first frame  
  }
}