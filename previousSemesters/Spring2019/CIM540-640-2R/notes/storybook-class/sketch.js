var page0,page1,page2,page3;

var image0,image1,image2,image3;

var currentImage = -1;

function preload(){
  image0 = loadImage("assets/Thatwasclose0.jpg");
  image1 = loadImage("assets/Thatwasclose1.jpg");
  image2 = loadImage("assets/Thatwasclose2.jpg");
  image3 = loadImage("assets/Thatwasclose3.jpg");
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



  if(currentImage == 0){
      image(image0,0,0);
      text("There was a dinosaur", 10, 10);
  }else if(currentImage == 1){
    image(image1,0,0);
    text("And he liked to dance", 10,10);
  }else if(currentImage == 2){
    image(image2,0,0);
    text("And a meteor was coming", 10,10);
  }else if(currentImage == 3){
    image(image3,0,0);
    text("And it passed", 10,10);
  }else{
    text("click on the buttons below to read the story", 10,250);
  }

}
