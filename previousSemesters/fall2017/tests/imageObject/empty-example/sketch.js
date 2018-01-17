var imgs = {};  // Declare variable 'img'.



function setup() {
  createCanvas(400, 500);
  var curImg = loadImage("assets/penguin.jpg");
  imgs["pan"] = {"x":100,"y":100, "image":curImg};
    // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(imgs["pan"].image, imgs["pan"].x, imgs["pan"].y, imgs["pan"].image.width/2, imgs["pan"].image.height/2);

}
