// Reference for DOM Library https://p5js.org/reference/#/libraries/p5.dom
var cnv;
function setup() {
  // put setup code here
  var cnv = createCanvas(400,400);
  cnv.id("mycanvas");

  var container0 = createDiv();

  container0.id("container0");

  select("#container0").html("<h1>Your sketch title here!</h1>");

  cnv.parent(container0);

  select("#container0").style("width", "400px");

  select("#container0").style("margin", "0 auto");

  select('body').style("background", "red");

  //select("#mycanvas").center();

  //canvasCSS.style("margin", "0 auto");
}

function draw() {
  // put drawing code here
  background(0);
}
