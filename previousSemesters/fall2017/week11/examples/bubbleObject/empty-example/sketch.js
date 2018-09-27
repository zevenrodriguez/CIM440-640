var bubble1;
var bubble2;

function setup() {
    createCanvas(400, 400);

    bubble1 = new bubble(random(width), random(height), 100);
    bubble2 = new bubble(random(width), random(height), 100);

}

function draw() {
    background(255);
    bubble1.display();
    bubble1.move();
    console.log("The current position of bubble1 is: " + bubble1.x + " " + bubble1.y);
    bubble1.checkWidth();
    console.log("The current position of bubble1 is off the screen: " +  bubble1.checkWidth());

    bubble2.display();
    bubble2.move();
    bubble2.checkWidth();

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

    this.checkWidth = function () {
        if (this.x > width) {
            this.x = 0;
            return true;
        }else{
            return false;
        }
    }


}
