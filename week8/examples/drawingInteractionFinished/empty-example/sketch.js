var centerX = 0;
var centerY = 0;
var changeBColor;
var hRedColor, hGreenColor, hBlueColor;

var cloudButton;
var cloudImage;
var cloudsOn = false;


function setup() {
    createCanvas(400, 400);
    centerX = width / 2;
    centerY = height / 2;

    changeBColor = color(0, 127, 0);


    cloudButton = createButton("Show Clouds");
    cloudButton.position(300,420);
    cloudButton.mousePressed(changeBG);

    var redText = createP('Red');
    hRedColor = createSlider(0, 255, 0);

    var greenText = createP('Green');
    hGreenColor = createSlider(0, 255, 0);

    var blueText = createP('Blue');
    hBlueColor = createSlider(0, 255, 0);

    cloudImage = loadImage("assets/clouds.jpg");
}

function draw() {
    background(changeBColor);
    if (cloudsOn == true) {
        image(cloudImage, 0, 0, width, height);
    }

    centerX = mouseX;
    centerY = mouseY;

    fill(255);
    stroke(0);
    strokeWeight(1);

    //face
    ellipse(centerX, centerY, 100, 100);
    //nose
    var noseWiggle = map(mouseX, 0, width, -10, 10);
    ellipse(centerX + noseWiggle, centerY + 10, 20, 20);
    //eyes
    ellipse(centerX - 10, centerY - 10, 10, 20);
    ellipse(centerX + 10, centerY - 10, 10, 20);

    rectMode(CENTER);
    rect(centerX, centerY + 30, 50, 15, 5);
    rect(centerX, centerY + 30, 50, 1, 1);

    noFill();
    strokeWeight(4);
    arc(centerX, centerY, 100, 100, 0, PI)
    stroke(hRedColor.value(), hGreenColor.value(), hBlueColor.value());
    strokeWeight(30);
    arc(centerX, centerY, 100, 100, PI, TWO_PI)

}

function mousePressed() {
    changeBColor = color(200, 75, 0);
}

function changeBG(){
        cloudsOn = true;

}
