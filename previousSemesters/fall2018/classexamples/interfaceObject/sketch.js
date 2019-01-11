var button1;
var button2;

var bgColor = "white";

function setup() {
  // put setup code here
  createCanvas(400,400);

  button1 = new interfaces(100,200,50,"red");
  button2 = new interfaces(200,200,50,"green");


}

function draw() {
  // put drawing code here

  background(bgColor);

  button1.display();
  button1.check();
  button2.display();
  button2.check();
}

function mousePressed(){
  if(button1.overlay == true){
    //then do something
    bgColor = "pink";
  }

  if(button2.overlay == true){
    bgColor = "turquoise";
  }
}


class interfaces{
  constructor(tempX, tempY, tempSize, tempColor){
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
    this.overlay = false;
  }


  display(){

    fill(this.boxColor);
    rect(this.x,this.y,this.boxSize,this.boxSize);

    if(this.overlay == true){
      fill(255,100);
      rect(this.x,this.y,this.boxSize,this.boxSize);
    }
  }

  check(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)){
      console.log("over button");
      this.overlay = true;
    }else{
      this.overlay = false;
    }
  }


}
