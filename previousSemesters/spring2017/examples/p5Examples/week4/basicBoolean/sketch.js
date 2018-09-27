var changeBackground = false;

function setup() {

}

function draw() {
  if(changeBackground == true){
    background(255,0,0);
  }else{
    background(0,255,0);
  }
}

function mousePressed(){
  changeBackground = true;
}

function mouseReleased(){
  changeBackground = false;
}
