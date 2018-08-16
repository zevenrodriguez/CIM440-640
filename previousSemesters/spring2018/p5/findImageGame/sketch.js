var pics = [];

var targetPosX = [100, 300, 500];

var targetPosY = 100;

var currentSelection = 0;

var outputText = "Find the soccer ball?";

function setup() {
    createCanvas(600, 400);
    pics[0] = loadImage("assets/football.png");

    pics[1] = loadImage("assets/basketball.png");

    pics[2] = loadImage("assets/soccer.png");
}

function draw() {

    background(255);
    rectMode(CENTER);
    imageMode(CENTER);

    textSize(32);
    text(outputText, 50, 250);


    if (mouseX > targetPosX[0] - 100 && mouseX < targetPosX[0] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
        image(pics[0], targetPosX[0], targetPosY);
        currentSelection = 1;

    } else {
        rect(targetPosX[0], 100, 200, 200);
    }

    if (mouseX > targetPosX[1] - 100 && mouseX < targetPosX[1] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
        image(pics[1], targetPosX[1], targetPosY);
          currentSelection = 2;
    } else {
        rect(targetPosX[1], 100, 200, 200);
    }

    if (mouseX > targetPosX[2] - 100 && mouseX < targetPosX[2] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
        image(pics[2], targetPosX[2], targetPosY);
          currentSelection = 3;

    } else {
        rect(targetPosX[2], 100, 200, 200);
    }

}

function mousePressed(){
  if(currentSelection == 3){
    console.log("You won!");
    outputText = "You won!";
  }else{
    console.log("You lost!");
    outputText = "You lost!";
  }
}
