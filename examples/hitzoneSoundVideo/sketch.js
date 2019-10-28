var button1, button2;
var soundFile;
var vid;

function preload(){
  soundFile = loadSound('assets/CowMoo.mp3');
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  vid = createVideo('assets/cow.mp4');
  vid.hide();
  button1 = new hitzoneObject(100,200,50,"red", "Stop Button", loadImage("assets/stop.png"));
  button2 = new hitzoneObject(200,200,50, "green", "Play Button", loadImage("assets/play.png"));


}

function draw() {
   background(255);

   fill(0);
   text("Knock Knock? Who's there? Interrupting Cow. Interrupting cow who?", 10,50);

   button1.display();
   button1.check();

   button2.display();
   button2.check();


}

function mousePressed(){
  if(button1.overlay == true){
    //red button
    console.log(button1.name);
    soundFile.stop();
    vid.stop();
    vid.hide();
  }

  if(button2.overlay == true){
    // green button
    console.log(button2.name);
    soundFile.play();
    vid.play();
    vid.show();
    vid.style("display","inline-block");

  }
}

class hitzoneObject{

  constructor(tempX, tempY, tempSize, tempColor, tempName, tempImage){
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
    this.overlay = false;
    this.name = tempName;
    this.image = tempImage;

  }

  display(){

    fill(this.boxColor);
    //rect(this.x,this.y,this.boxSize,this.boxSize);
    image(this.image,this.x,this.y,this.boxSize,this.boxSize);
    text(this.name, this.x, this.y-10);

    if(this.overlay == true){
      fill(127,127);
      rect(this.x,this.y,this.boxSize,this.boxSize);
    }
  }

  check(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)){
    //  console.log("over button " + this.boxColor);
    this.overlay = true;
    }else{
      //console.log("off button" + this.boxColor);
      this.overlay = false;
    }
  }



}//end of hitzoneObject



//end of code
