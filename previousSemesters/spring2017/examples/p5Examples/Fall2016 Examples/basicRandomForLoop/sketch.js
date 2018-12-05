var randomPositionX = 0;
var randomPositionY = 0;
var numberOfEllipse = 300;
function setup() {
  createCanvas(200, 200);
  
  background(255);
  for (var i = 0; i < numberOfEllipse; i++) {
    randomPositionX = random(width);
    randomPostitionY = random(height);
    ellipse(randomPositionX, randomPostitionY, 10, 10);

  }

}

function draw() {

  
}