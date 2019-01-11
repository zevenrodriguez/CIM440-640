var posX = 0;
var posY = 0;
var rectSize = 100;
var colors = "green";

var button1, button2;

var buttonArray = [];

var soundFile;

var vid;

function preload(){
  soundFile = loadSound('assets/CowMoo.mp3');
  vid = createVideo('assets/cow.mp4');
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  button1 = new interfaces(100,200,50,"red", "Red Button");
  button2 = new interfaces(200,200, 50, "green", "Green Button");

  for(var i =0; i < 10; i++){
    var c = color(random(255),random(255),random(255));
    buttonArray[i] = new interfaces(random(width), random(height), 50, c,i);
  }
  vid.hide();
}

function draw() {
  // soundFile.play();
  // put drawing code here
   //display();
   background(255);
   button1.display();
   if(button1.check(mouseX,mouseY)){
     console.log(button1.name);
   }
   button2.display();
   button2.check(mouseX,mouseY);

   for(var i = 0; i < buttonArray.length; i++){
     buttonArray[i].display();
     if(buttonArray[i].check(mouseX,mouseY)){
       console.log(buttonArray[i].name);
       background(buttonArray[i].color);
     }
   }

}

function mousePressed(){
  // for(var i = 0; i < buttonArray.length; i++){
  //   if(buttonArray[i].check(mouseX, mouseY)){
  //     if(i == 0 || buttonArray[i].name == "1"){
  //       //over the green button
  //     }else if(i==1){
  //       //over the red button
  //     }
  //   }
  // }

  if(button1.check(mouseX,mouseY)){
    //red button
    soundFile.stop();
    vid.stop();
    vid.hide();
  }

  if(button2.check(mouseX, mouseY)){
    // green button
    soundFile.play();
    vid.play();
    vid.show();
  }
}

class interfaces{
  constructor(tempX,tempY,tempS,tempC,tempName){
    this.x = tempX;
    this.y = tempY;
    this.size = tempS;
    this.color = tempC;
    this.name = tempName;
    this.overlay = false;
  }

  display(){

    fill(this.color);
    rect(this.x,this.y,this.size,this.size);
    text(this.name, this.x, this.y-10);

    if(this.overlay == true){
      fill(127,127);
      rect(this.x,this.y,this.size,this.size);
    }
  }

  check(mX,mY){
    if(mX > this.x && mX < this.x + this.size && mY > this.y && mY < this.y + this.size){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;
      return false;
    }
  }


}













//end of code
