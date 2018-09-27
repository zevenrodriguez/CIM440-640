var frameArray = [];
var currentImage = 0;



function preload() {
    frameArray[0] = loadImage("assests/Thatwasclose0.jpg");
    frameArray[1] = loadImage("assests/Thatwasclose1.jpg");
    frameArray[2] = loadImage("assests/Thatwasclose2.jpg");
    frameArray[3] = loadImage("assests/Thatwasclose3.jpg");
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    frameRate(1);


    image(frameArray[currentImage], 0, 0);

    //currentImage = currentImage + 1;

    console.log(currentImage);

    currentImage++;

    if (currentImage == frameArray.length) {
        currentImage = 0;
    }
}
