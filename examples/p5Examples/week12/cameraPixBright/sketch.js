/*
 * @name Video Capture
 * @frame 710,240
 * @description <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p><br><br>
 * Capture video from the webcam and display
 * on the canvas as well with invert filter. Note that by
 * default the capture feed shows up, too. You can hide the
 * feed by uncommenting the capture.hide() line.
 */
var capture;
var stepSize = 2;
var dPixelX, dPixelY;
var prevD, currentD;
var bright = 200;

function setup() {
  createCanvas(700, 400);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  colorMode("HSB", 255)
}

function draw() {
  frameRate(15);
  background(255);
  image(capture, 0, 0, 640, 480);
  capture.loadPixels();

  for (var y = 0; y < capture.height; y+=stepSize) {
    for (var x = 0; x < capture.width; x+=stepSize) {
      var loc = (y * capture.width + x) * 4;
      //var darkness = (255 - capture.pixels[i*4]) / 255;
      var b = capture.pixels[loc];

      if (b > bright) {
        fill(0);
        ellipse(x, y, 1, 1);
      }

    }
  }
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    bright+=5
  }
  
  if(keyCode === DOWN_ARROW){
    bright-=5
  }
  
  console.log(bright);
  
}