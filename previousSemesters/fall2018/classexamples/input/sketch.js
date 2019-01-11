var msg = "";

function setup() {
  // put setup code here
  createCanvas(400,400);
  var inp = createInput('');
  inp.position(10,10);
  inp.input(function(){
    msg = inp.value();
  });
 //inp.input(myInputEvent);
}

function draw() {
  // put drawing code here
  background(255);
  text(msg,10,50,width,height);
}
