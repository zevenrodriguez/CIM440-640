var storybookArray = [];

var storyText = ["There was once a dinosaur.", "He was dancing.", "And a meteor passed, so fast!", "But it did not hit!"];

var page0,page1,page2,page3;

var currentPage = 0;

function preload(){
  storybookArray[0] = loadImage("assets/Thatwasclose0.jpg");
  storybookArray[1] = loadImage("assets/Thatwasclose1.jpg");
  storybookArray[2] = loadImage("assets/Thatwasclose2.jpg");
  storybookArray[3] = loadImage("assets/Thatwasclose3.jpg");

}

function setup() {
  // put setup code here
  createCanvas(500,500);

  page0 = createButton("Page 0");
  page0.position(10,400);
  page0.mousePressed(function(){
    currentPage = 0;
  });
  page1 = createButton("Page 1");
  page1.position(100,400);
  page1.mousePressed(function(){
    currentPage = 1;
  });
  page2 = createButton("Page 2");
  page2.position(200,400);
  page2.mousePressed(function(){
    currentPage = 2;
  });
  page3 = createButton("Page 3");
  page3.position(300,400);
  page3.mousePressed(function(){
    currentPage = 3;
  });

}

function draw() {
  // put drawing code here
  background(255);
  console.log("currentPage: " + currentPage);
  image(storybookArray[currentPage],0,0);
  text(storyText[currentPage], 10,50);


}
