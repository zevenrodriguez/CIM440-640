var frameAmounts = 4;
var frameArray = [];
var currentFrame = 0;

var prevMillis = 0;
var interval = 5000;

function preload() {
  for (var frames = 0; frames < frameAmounts; frames++) {
    var frameString = "assests/Thatwasclose" + frames + ".jpg";
    frameArray[frames] = loadImage(frameString);
  }
}

function setup() {
  createCanvas(500, 500);

}

function draw() {

   if(millis() - prevMillis >= interval){
   currentFrame++;
   console.log(currentFrame);
   prevMillis = millis();
  }

   // Next frame
  if (currentFrame == frameArray.length) {
    currentFrame = 0;
    // Return to first frame
  }

  image(frameArray[currentFrame], 0, 0);

}
