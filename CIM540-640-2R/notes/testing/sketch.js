function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
  background(255);
  rect(20, 20, 20, 20);
  if(mouseX > 20 && mouseX < 40 && mouseY > 20 && mouseY < 40){
    fill("red");
  }else{
    fill("white");
  }

}
