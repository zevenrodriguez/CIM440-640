var xPos = 0;
var counter = 0;
var canvasImage;
var cnv;
function setup() {
  cnv = createCanvas(500, 100);
}

function draw() {
  frameRate(30);
  background(255);
  xPos++;
  ellipse(xPos, height/2, 20, 20);
  
  if(xPos > width){
    xPos = 0;
  }
}

function mousePressed(){
  counter++;
  canvasImage = "images/myCanvas" + counter + ".jpg";
  save(cnv, canvasImage);      // Saves canvas as an image
  console.log("Saved");
}