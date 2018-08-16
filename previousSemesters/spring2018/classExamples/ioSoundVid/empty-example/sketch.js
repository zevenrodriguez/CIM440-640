var interfaceItems = [];

var brushSize = 10;

var imageArray = [];

var soundFile;

var showImage = false;

var vid;

function preload() {

  imageArray.push(loadImage('assets/play.png'));
  imageArray.push(loadImage('assets/stop.png'));
  imageArray.push(loadImage('assets/cow.png'));


  soundFile = loadSound('assets/CowMoo.mp3');

  vid = createVideo('assets/cow.mp4');


}


function setup(){
  createCanvas(400,400);

  interfaceItems.push(new interface(100,200,50, imageArray[0]));
  interfaceItems.push(new interface(200,200,50, imageArray[1]));


}


function draw(){
  background(255);
  if(showImage == true){
    vid.show();
  }else{
    vid.hide();
  }

  interfaceItems[0].check();
  interfaceItems[0].display();
  interfaceItems[1].check();
  interfaceItems[1].display();
  //console.log(interfaceItems[0].check());
}

function mousePressed(){
  if(interfaceItems[0].check() == true){
    soundFile.setVolume(1);
    soundFile.play();
    vid.play();
    showImage = true;
  }

  if(interfaceItems[1].check() == true){
    soundFile.stop();
    vid.stop();
    showImage = false;
  }
}


function interface(tempX, tempY, tempBoxSize, tempImage){
  this.x  = tempX;
  this.y = tempY;
  this.boxSize = tempBoxSize;
  this.img = tempImage;
  this.overlay = false;

  this.display = function(){
    image(this.img, this.x, this.y, this.boxSize, this.boxSize);

    if(this.overlay == true){
      fill(255,200);
      rect(this.x, this.y, this.boxSize, this.boxSize);
    }
  }

  this.check = function(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;
      return false;
    }
  }

}
