/*
 * @name Video Pixels
 * @frame 320,240
 * @description <p>Load a video, manipulate its pixels and draw to canvas.
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
var fingers;
var stepSize = 6;
var bright = 0;

function setup() {
  createCanvas(640, 240);
  // specify multiple formats for different browsers
  fingers = createVideo(['assets/fingers.mov',
    'assets/fingers.webm'
  ]);
  fingers.loop();
  fingers.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  image(fingers, 320,0)
  fingers.loadPixels();
  //var stepSize = round(constrain(mouseX / 8, 6, 32));
  for (var y = 0; y < fingers.height; y += stepSize) {
    for (var x = 0; x < fingers.width; x += stepSize) {
      var i = y * fingers.width + x;
      var darkness = (255 - fingers.pixels[i * 4]) / 255;

      if (bright > darkness) {
        ellipse(x, y, stepSize, stepSize);
      }
    }
  }
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    bright+=.01
  }
  
  if(keyCode === DOWN_ARROW){
    bright-=.01
  }
  
  console.log(bright);
  
}