var bubble0;

var flipFlop = false;
var currentFade;



function setup() {
  createCanvas(400, 400);
  bubble0 = new bubbles(random(width), random(height), 100);

  noStroke();
}

function draw() {
  background(255);
  
  console.log(flipFlop);
  
  if(flipFlop == false){
    currentFade = bubble0.fade("up");  
  }else{
    currentFade = bubble0.fade("down");
  }
  
  if(bubble0.fadeDone == true){
    if(flipFlop == true){
        flipFlop = false;
    }else{
      flipFlop = true;
    }
  bubble0.fadeDone = false;
  }
  bubble0.display();
  
}

function bubbles(tempX, tempY, tempDiameter) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.counter = 0;
  this.fadeDone = false;
  
  
  this.display = function() {
    fill(100, this.counter);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  

  this.fade = function(upDown) {
    
    
    if (upDown == "up") {
      this.counter++;
      if(this.counter == 255){
        this.counter = 255;
        this.fadeDone =  true;
      }
    }

    if (upDown == "down") {
      this.counter--;
      if(this.counter == 0){
        this.counter = 0;
        this.fadeDone = true;
      }
    }


  }

}