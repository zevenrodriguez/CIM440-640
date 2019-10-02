
var interval = 1000;
var prevMillis = 0;
var counter = 0;
function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
  //console.log(millis());
  if(millis() - prevMillis > interval){
    //do something
    prevMillis = millis();
    counter = counter + 1;
    console.log(counter
    );
  }
}
