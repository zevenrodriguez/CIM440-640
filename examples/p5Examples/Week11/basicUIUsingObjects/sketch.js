var playSound = false;
var stopSound = true;

var menuStartX = 200;
var menuStartY = 300;
var buttonOffset = 100;
var numberOfButtons = 2;

var buttonSize = 100;

var buttonArray = [];
var imageArray = [];

var soundFile;


function preload() {

  imageArray.push(loadImage('assets/play.png'));
  imageArray.push(loadImage('assets/stop.png'));
  soundFile = loadSound('assets/CowMoo.mp3');


}

function setup() {

  createCanvas(500, 500);
  buttonArray.push(new buttonObject(menuStartX, menuStartY, buttonSize, imageArray[0], "play"));
  buttonArray.push(new buttonObject(menuStartX + (buttonOffset * numberOfButtons), menuStartY, buttonSize, imageArray[1], "stop"));


}

function draw() {
  background(255);
  
  for (var buttons in buttonArray) {
    buttonArray[buttons].display(buttonArray[buttons].overButton(mouseX, mouseY));
  }

  if (mouseIsPressed) {
    for (var buttons in buttonArray) {
      if (buttonArray[buttons].overButton(mouseX, mouseY) == true) {

        switch (buttonArray[buttons].buttonType) {
          case "play":
            console.log("playSound");
            playSound = true;
            break;
          case "stop":
            console.log("stopSound");
            stopSound = true;
            break;
        }
      }
    }
  }

  if (playSound == true) {
    playSound = false;
    stopSound = false;
    soundFile.setVolume(1);
    soundFile.play();
  }

  if (stopSound == true) {
    playSound = false;
    stopSound = false;
    soundFile.stop();

  }

}


function buttonObject(tempX, tempY, tempBsize, tempImg, tempBtype) {
  this.x = tempX;
  this.y = tempY;
  this.bSize = tempBsize;
  this.buttonImage = tempImg;
  this.buttonType = tempBtype;

  this.display = function(mousedOver) {

    if (mousedOver == true) {
      rectMode(CENTER);
      fill(100, 50);
      rect(this.x, this.y, this.bSize, this.bSize);
    }

    imageMode(CENTER);
    image(this.buttonImage, this.x, this.y, this.bSize, this.bSize);

    if (mousedOver == true) {
      rectMode(CENTER);
      fill(255, 125);
      rect(this.x, this.y, this.bSize, this.bSize);
    }

  }

  this.overButton = function(curMouseX, curMouseY) {
    var oB = dist(curMouseX, curMouseY, this.x, this.y);
    if (oB < this.bSize / 2) {
      console.log(this.buttonType + " over")
      return true;
    } else {
      return false;
    }
  }
}