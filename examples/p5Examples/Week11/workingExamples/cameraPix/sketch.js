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
var stepSize = 6;
var dPixelX, dPixelY;
var prevD, currentD;

function setup() {
  createCanvas(700, 400);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function draw() {
  //background(255);
  image(capture, 0, 0, 320, 240);
    capture.loadPixels();

  //var stepSize = round(constrain(mouseX / 8, 6, 32));
  //console.log(capture.pixels[0]);
  
  for (var y=0; y<capture.height; y+=stepSize) {
    for (var x=0; x<capture.width; x+=stepSize) {
      var i = y * capture.width + x;
      var darkness = (255 - capture.pixels[i*4]) / 255;
      //console.log(darkness);
      //var radius = stepSize;
      
      if(darkness > .9){
        prevD = darkness;
        dPixelX = x;
        dPixelY = y;
        //console.log(prevD);
      }
      
    }
  }
  console.log(dPixelY);
  fill(0);
  ellipse(dPixelX, dPixelY, 10, 10);
}
