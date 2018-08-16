var centerX = 250;
var centerY = 250;

var carnival;
var party;
var bgImage;
var carnivalButton;
var partyButton;

var showHide;

var hiding = false;

function preload() {
  carnival = loadImage("assets/carnival.jpg");
  party = loadImage("assets/party.jpg");
}

function setup() {
    createCanvas(500, 500);
    bgImage = carnival;
    carnivalButton = createButton("Going to Carnival");
    carnivalButton.position(10,10);
    carnivalButton.mousePressed(function(){
      bgImage = carnival;
    });

    partyButton = createButton("Let's Party!!!!");
    partyButton.position(150,10);
    partyButton.mousePressed(function(){
      bgImage = party;
    });

    showHide = createButton("Show Hide Clown");
    showHide.position(250,10);
    showHide.mousePressed(function(){


          if(hiding == false){
            hiding = true;
          }else{
            hiding = false;
          }


        });



}

function draw() {
  background(255);
  image(bgImage,0,0);

  if(hiding == false){
  fill(255, 255, 255);

  strokeWeight(1);
  //face
  ellipse(centerX, centerY, 100, 100);
  //nose
  ellipse(centerX, centerY + 10, 20, 20);
  //eyse
  ellipse(centerX - 10, centerY - 10, 10, 20);
  ellipse(centerX + 10, centerY - 10, 10, 20);
  rectMode(CENTER);
  rect(centerX, centerY + 30, 50, 15, 5);
  rect(centerX, centerY + 30, 50, 1, 1);

  noFill();
  strokeWeight(4);
  arc(centerX, centerY, 100, 100, 0, PI);
  }
  if(mouseX < width/2){
    console.log("left side of screen");
    stroke("purple");

  }

  if(mouseX > width/2){
    console.log("right side of screen");
    stroke("blue");

  }
  strokeWeight(30);
  arc(centerX, centerY, 100, 100, PI, TWO_PI);

}
