var bubble0;

var bubbles = [];

function setup() {
    createCanvas(400, 400);
    bubble0 = new bubble(100, 100, 100);
    bubble1 = new bubble(200, 200, 100);

    for (var i = 0; i < 100; i++) {
        bubbles.push(new bubble(random(width), random(height), random(10, 100), random(1,10)));
    }

    console.log(bubbles.length);
}

function draw() {
    background(255);

    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].display();
        bubbles[i].move();
        var checkBubble = bubbles[i].checkPos();

        if (checkBubble == true) {
            bubbles[i].x = 0;
        }
    }


}


function bubble(tempX, tempY, tempDiameter, tempSpeed) {

    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.speed = tempSpeed;

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = random(255);



    this.display = function () {
        fill(this.r,this.g,this.b, this.alpha);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.move = function () {
        this.x = this.x + this.speed;
    }

    this.checkPos = function () {
        if (this.x > width) {
            return true;
        } else {
            return false;
        }
    }



}
