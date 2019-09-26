// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22

var imageArray = [];

var hitX = [100,200];
var hitY = [300,300];

var hitSize = 50;

var currentImage = 0;

function preload(){
  imageArray[0] = loadImage("images/sloth.jpg");
  imageArray[1] = loadImage("images/puppy.jpg");
  imageArray[2] = loadImage("images/dinosaur.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

}

function draw() {

  background(255);
  image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);

  rect(hitX[0],hitY[0],hitSize,hitSize);
  rect(hitX[1],hitY[1],hitSize,hitSize);

}//end of draw

function mousePressed(){

  if(mouseX >hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("Clicked button 0");
    currentImage = currentImage + 1;
    if(currentImage == 3){
      currentImage = 0;
    }//check length
  }// end of hit[0] click

}//end of mousePressed
