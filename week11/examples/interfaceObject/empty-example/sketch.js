
var interfaceItems = [];

var wasPressed = "";

function setup() {
    createCanvas(400, 400);

    interfaceItems.push(new interface(100, 100, 100));

}

function draw() {
    background(255);
    fill(0);
    text(wasPressed, 10, 10);

    var currentItemCheck = interfaceItems[0].check();
    console.log(currentItemCheck);
    interfaceItems[0].display();



}


function interface(tempX, tempY, tempBoxSize) {

    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempBoxSize;
    this.setFill = 0;


    this.display = function() {
        fill(this.setFill);
        rect(this.x, this.y, this.boxSize, this.boxSize);
    }


    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)) {
            this.setFill = 255;
            return true;
        } else {
            this.setFill = 0;
            return false;
        }
    }
}

function mousePressed(){
    var checkItem1 = interfaceItems[0].check();
    if(checkItem1 == true){
       wasPressed = "check1";
        console.log(wasPressed);
       }else{
           wasPressed = "";
       }
}
