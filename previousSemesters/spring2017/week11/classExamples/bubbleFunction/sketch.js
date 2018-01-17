var bubbleX = 0;
var bubbleY = 200;
var bubbleSize = 100;


function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(255);

    display();
    move();
    console.log(checkPos());
    var checking = checkPos();

    if(checking == true){
        bubbleX = 0;
    }

    if(mouseIsPressed){
        moveFaster(10);
    }




}

function display(){
    ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);
}

function move(){
    bubbleX++;
}

function moveFaster(howFast){
    bubbleX = bubbleX + howFast;
}

function checkPos(){
   if(bubbleX > width){
        return true;
    }else{
        return false;
    }
}
