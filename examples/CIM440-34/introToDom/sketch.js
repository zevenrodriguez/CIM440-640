function setup() {
  // put setup code here
  var cnv = createCanvas(400,400);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0");
  // # => designate an id, find an id = container0
  //.html injects html or text into another html tag
  select("#container0").html("<h1>Your sketch title here!</h1>");
  //.style("css property", "value")

  select("#container0").style("width", "400px");//setting width of container0
  select("#container0").style("margin", "20px auto");//center our container, margin: 0 auto; 0 refers to the top and bottom spacing of our container, the auto refers to the left and right spacing of our container
  //To center our container, you need to set a width and margin: 0 auto;
  cnv.parent("#container0");

//  select("#container0").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/yPWkPOfnGsw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  select('body').style("background-color","red");
  //select('body').style("background-image", "url('assets/image.jpg')");
}

function draw() {
  // put drawing code here
  background(0);

}
