var pics = [];

//var ball = ["football", "basketball", "soccer"];

var targetPosX = [100, 300, 500];

var targetPosY = 100;

//var overlayArray = [false, false, false];

var currentPosition = -1;

var answer = 2;

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
    text("Find the soccer ball?", 50, 250);


    for (var i = 0; i < targetPosX.length; i++) {
        if (mouseX > targetPosX[i] - 100 && mouseX < targetPosX[i] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
            image(pics[i], targetPosX[i], targetPosY);
            currentPosition = i;
            console.log(currentPosition);

        } else {
            rect(targetPosX[i], 100, 200, 200);

        }

    }

    if(answer == currentPosition){
      console.log("You guessed correctly");
      text("You guessed correctly", 10,300);
    }else if(currentPosition == 0 || currentPosition == 1){
      console.log("You guessed incorrectly");
      text("You guessed incorrectly", 10,300);
    }

    currentPosition = -1;




}
