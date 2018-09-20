function setup() {
  // put setup code here
  createCanvas(400,400);

}

function draw() {
  // put drawing code here

}

function mousePressed(){
  for(var i = 0; i < height; i++){
    stroke(0,random(127,256),0);
    line(0,i,width,i);
  }
}
