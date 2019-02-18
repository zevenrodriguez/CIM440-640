var question = ["How many licks to the center of a tootsie pop"];

options0 = {text:"Ah one", response: 0, posX: 10, posY: 200}
options1 = {text:"Ah two", response: 0, posX: 60, posY: 200}
options2 = {text:"Ah three", response: 0, posX: 110, posY: 200}
options3 = {text:"Ah more then three", response: 0, posX: 160, posY: 200}


var button1,button2,button3,button4;

var currentOption = -1;
function setup() {
  // put setup code here
  createCanvas(400,400);

  button1 = createButton("1");
  button1.position(10,220);
  button1.mousePressed(function(){
    options0.response = options0.response + 1;
  });

  button2 = createButton("2");
  button2.position(60,220);
  button2.mousePressed(function(){
    options1.response = options1.response + 1;

  });

  button3 = createButton("3");
  button3.position(110,220);
  button3.mousePressed(function(){
    options2.response = options2.response + 1;

  });

  button4 = createButton("4");
  button4.position(200,220);
  button4.mousePressed(function(){
    options3.response++;

  });

}

function draw() {
  // put drawing code here
  background(255);

  text(question, 20,100);

  ellipse(options0.posX + 15,options0.posY -50, options0.response, options0.response);
  ellipse(options1.posX + 15,options1.posY -50, options1.response, options1.response);
  ellipse(options2.posX + 15,options2.posY -50, options2.response, options2.response);
  ellipse(options3.posX + 50,options3.posY -50, options3.response, options3.response);

  text(options0.response,options0.posX + 15,options0.posY -75);
  text(options1.response,options1.posX + 15,options1.posY -75);
  text(options2.response,options2.posX + 15,options2.posY -75);
  text(options3.response,options3.posX + 50,options3.posY -75);

  text(options0.text, options0.posX,options0.posY);
  text(options1.text, options1.posX,options1.posY);
  text(options2.text, options2.posX,options2.posY);
  text(options3.text, options3.posX,options3.posY);


}
