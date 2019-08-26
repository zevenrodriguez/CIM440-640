function setup() {
  // put setup code here
  //Sets the size of the canvas
  createCanvas(500,500);
  //Sets the color of the background
  background("green");
  background(0);//black
  background(255);//white
  background(200);// grayscale 0-255 grayish-white
  background(255,0,0); // full red
  background(0,255,0);// full green
  background(0,0,255);// full blue
  background(127,255,0);//chartreuse
  background("#ffffff"); //hexidecimal white
  background("#FFA07A"); //hexidecimal light salmon

  fill(0,255,0);//adjusts inner shape color
  stroke("violet");//outer edge color
  ellipse(50,50,100,100);//ellipse a

  fill(255,0,0);// set ellipse b fill color to red
  stroke(255);//set ellipse b stroke color to white
  ellipse(100,100,50,50);//ellipse b

  


}

function draw() {
  // put drawing code here
}
