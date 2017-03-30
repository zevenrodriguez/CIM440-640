var bubble0;

var bubbles = [];

function setup() {
    createCanvas(400, 400);
    bubble0 = new bubble(100, 100, 100);
    bubble1 = new bubble(200,200,100);

    for(var i = 0; i < 100; i++){
        bubbles.push(new bubble(random(width), random(height), random(10,100)));
    }

    console.log(bubbles.length);
}

function draw() {
    background(255);

//    bubble0.display();
//    bubble0.move();
//    var checkBubble = bubble0.checkPos();
//
//    if(checkBubble == true){
//        bubble0.x = 0;
//    }
//
//    bubbles[0].display();
//    bubbles[0].move();


    for(var i = 0; i < bubbles.length; i++){
        bubbles[i].display();
    }


}


function bubble(tempX, tempY, tempDiameter) {

    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;

    this.display = function () {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.move = function () {
        this.x++;
    }

    this.checkPos = function () {
        if (this.x > width) {
            return true;
        } else {
            return false;
        }
    }



}
