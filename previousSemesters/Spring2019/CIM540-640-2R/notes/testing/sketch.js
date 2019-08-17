var prevMillis = 0;
var interval = 1000; //1 sec = 1000 milliseconds
var counter = 0;
function setup() {
}

function draw() {
  background(255);
  if(millis() - prevMillis >= interval){
    counter++;
    prevMillis = millis();

  }
    text(counter, width/2, height/2);
}
