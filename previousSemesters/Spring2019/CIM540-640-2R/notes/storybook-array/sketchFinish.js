var storybookArray0, storybookArray1, storybookArray2, storybookArray3;

var storyText0 = "There was once a dinosaur.";
var storyText1 = "He was dancing.";
var storyText2 = "And a meteor passed, so fast!";
var storyText3 = "But it did not hit!";

var page0,page1,page2,page3;

var currentPage = 0;

function preload(){
  storybookArray0 = loadImage("assets/Thatwasclose0.jpg");
  storybookArray1 = loadImage("assets/Thatwasclose1.jpg");
  storybookArray2 = loadImage("assets/Thatwasclose2.jpg");
  storybookArray3 = loadImage("assets/Thatwasclose3.jpg");

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


  if(currentPage == 0){
    image(storybookArray0,0,0);
    text(storyText0, 10,50);
  }else if(currentPage == 1){
    image(storybookArray1,0,0);
    text(storyText1, 10,50);
  }else if(currentPage == 2){
    image(storybookArray2,0,0);
    text(storyText2, 10,50);
  }else if(currentPage == 3){
    image(storybookArray3,0,0);
    text(storyText3, 10,50);
  }


}
