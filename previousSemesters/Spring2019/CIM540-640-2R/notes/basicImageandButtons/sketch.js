/* "Up-Close Sloth" by marissa_strniste, "Baby sloth, being cute" by Dave Gingrich is licensed under CC BY-SA 2.0. To view a copy of this license, visit: https://creativecommons.org/licenses/by-sa/2.0*/

var slothBaby;
var slothAdult;
var babyButton, adultButton;
var currentImage = 0;
function preload(){
  slothBaby = loadImage("assets/slothbaby.jpg");
  slothAdult = loadImage("assets/slothadult.jpg");
}

function setup() {
  // put setup code here
  createCanvas(500,500);
  babyButton = createButton("Baby Sloth");
  babyButton.position(10,40);
  babyButton.mousePressed(function(){
    currentImage = 0;
  });

  adultButton = createButton("Adult Sloth");
  adultButton.position(100,40);
  adultButton.mousePressed(adultChange);

}

function draw() {
  // put drawing code here
  background(255);
  text("10 Year Challenge!", 10,15);
  if(currentImage == 0){
    image(slothBaby, 0,20,slothBaby.width/2,slothBaby.height/2);
  }else if(currentImage == 1){
    image(slothAdult, 0,20,slothAdult.width/2,slothAdult.height/2);
  }
}

function adultChange(){
  currentImage = 1;
}
