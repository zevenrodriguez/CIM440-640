var button1, button2;

var soundFile;
var vid;

function preload(){
  soundFile = loadSound('assets/CowMoo.mp3');
  vid = createVideo('assets/cow.mp4');
}

function setup() {
  var cnv = createCanvas(400,400);
  cnv.id("mycanvas");
  //select("#mycanvas").style("width", "400px");
  //select("#mycanvas").style("margin", "0 auto");

  var container0 = createDiv();
  container0.id("container0");
  select("#container0").html("<h1>Your sketch title here!</h1>");

  select("#container0").style("width", "400px");
  select("#container0").style("height", "400px");
  select("#container0").style("background-color", "white");
  select("#container0").style("margin", "0 auto");
  cnv.parent(container0);
  vid.parent(container0);

  // tempX , tempY, tempSize, tempColor, label
  button1 = new Interfaces(100,200,50,"red", "Stop Button");
  button2 = new Interfaces(200,200,50,"green", "Play Button");
  vid.hide();

  select("body").style("background-color", "blue");
}

function draw() {
  background(255);
  button1.display();
  button1.check(mouseX,mouseY);
  button2.display();
  button2.check(mouseX,mouseY);

  //Do not play sounds untriggerd in the draw
  //soundFile.play();

}

function mousePressed(){
  if(button1.check(mouseX,mouseY) == true){
    //do something
    console.log(button1.name);
    soundFile.stop();
    vid.stop();
    vid.hide();

  }
  if(button2.check(mouseX,mouseY) == true){
    console.log(button2.name);
    soundFile.play();
    vid.show();
    vid.play();

  }
}

class Interfaces{
  constructor(tempX, tempY, tempS, tempC, tempName){
    //shape, location, color, label, boxSize
    this.x = tempX;
    this.y = tempY;
    this.size = tempS;
    this.color = tempC;
    this.name = tempName;
    this.overlay = false;
  }// end of constructor

    display(){

      fill(this.color);
      rect(this.x,this.y,this.size,this.size);
      text(this.name, this.x, this.y - 10);

      if(this.overlay == true){
        //gray fill with 50% opacity
        fill(127,127);
        rect(this.x,this.y,this.size,this.size);
      }
    }

    check(mX, mY){
      if(mX > this.x && mX < this.x + this.size && mY > this.y && mY < this.y + this.size){
        this.overlay = true;
        return true;
      }else{
        this.overlay = false;
        return false;
      }
    }

}
