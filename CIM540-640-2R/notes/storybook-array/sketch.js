var page0,page1,page2,page3;

var image0,image1,image2,image3;

var currentImage = 0;

var story = ["There was a dinosaur","And he liked to dance","And a meteor was coming","And it passed"];

var imageArray = [];

function preload(){
  imageArray[0] = loadImage("assets/Thatwasclose0.jpg");
  imageArray[1] = loadImage("assets/Thatwasclose1.jpg");
  imageArray[2] = loadImage("assets/Thatwasclose2.jpg");
  imageArray[3] = loadImage("assets/Thatwasclose3.jpg");
}

function setup(){
  createCanvas(500,500);
  page0 = createButton("Page 0");
  page0.position(10,400);
  page0.mousePressed(function(){

    currentImage = 0;

  });

  page1 = createButton("Page 1");
  page1.position(100,400);
  page1.mousePressed(function(){
    currentImage = 1;
  });

  page2 = createButton("Page 2");
  page2.position(200,400);
  page2.mousePressed(function(){
    currentImage = 2;
  });

  page3 = createButton("Page 3");
  page3.position(300,400);
  page3.mousePressed(function(){
    currentImage = 3;
  });

}

function draw(){
  background(255);

  image(imageArray[currentImage],0,0);
  text(story[currentImage], 10, 10);


}
