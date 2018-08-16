var button;
var val = "white";
var inp;


function setup() {
  // put setup code here
  createCanvas(100, 100);
  background(val);
  button = createButton('click me');
  button.mousePressed(changeBG);
  inp = createInput('');

}

function draw() {
  // put drawing code here
  background(val);
}

function changeBG() {
  val = inp.value();
}
