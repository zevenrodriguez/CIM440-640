var printButton;

function setup() {
  // put setup code here
  createCanvas(400,400);
  printButton = createButton("Print");
  printButton.mousePressed(function(){
    // you need to hide all of the things you do not want to print before you tell it to print the window.
  printButton.hide();
	window.print();
  printButton.show();

  });
}

function draw() {
  // put drawing code here
  ellipse(width/2, height/2, width/2, width/2);
}
