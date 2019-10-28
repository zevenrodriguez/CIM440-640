var button1, button2;
var soundFile;
var vid;

function preload(){
  soundFile = loadSound('assets/CowMoo.mp3');
  vid = createVideo('assets/cow.mp4');
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  button1 = new interfaces(100,200,50,"red", "Stop Button");
  button2 = new interfaces(200,200, 50, "green", "Play Button");

  vid.hide();
}

function draw() {
   background(255);

   fill(0);
   text("Knock Knock? Who's there? Interrupting Cow. Interrupting cow who?", 10,50);

   button1.display();
   button1.check(mouseX,mouseY);

   button2.display();
   //button2.check(mouseX,mouseY);

   if(button2.check(mouseX,mouseY)){
     console.log(button2.name);
   }



}

function mousePressed(){
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
