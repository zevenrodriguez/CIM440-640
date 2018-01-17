var bubble0;

function setup() {
    createCanvas(400, 400);
    bubble0 = new bubble(100, 100, 100);
    bubble1 = new bubble(200,200,100);
}

function draw() {
    background(255);

    bubble0.display();
    bubble0.move();
    var checkBubble = bubble0.checkPos();

    if(checkBubble == true){
        bubble0.x = 0;
    }

    bubble1.display();
    bubble1.move();
    var checkBubble1 = bubble1.checkPos();

    if(checkBubble1 == true){
        bubble1.x = 0;
    }

}

function display() {
    ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);
}

function move() {
    bubbleX++;
}

function moveFaster(howFast) {
    bubbleX = bubbleX + howFast;
}

function checkPos() {
    if (bubbleX > width) {
        return true;
    } else {
        return false;
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
