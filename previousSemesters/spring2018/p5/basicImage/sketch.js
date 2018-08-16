var img;  // Declare variable 'img'.

function setup() {
  createCanvas(400, 500);
  img = loadImage("assets/penguin.jpg");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, mouseX, mouseY, img.width/2, img.height/2);
}
