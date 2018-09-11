var sun;
var moon;

function preload(){
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here

  background(255);
  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
  //Interface
  textSize(18);
  text("Move over each area to reveal a surprise!", 20,20);
  line(width/2, 0, width/2, height);
  text("Day", 120,360);
  text("Night", 300,360);

  //Interaction


  /*
  if(true){
    Execute this code
  }
  */

  if(mouseX < width/2){
    console.log("Day Side");
    image(sun,100,100);
  }

  if(mouseX >= width/2){
    console.log("Night Side");
    image(moon,100,100);
  }







  //end of code
}
