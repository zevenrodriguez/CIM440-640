var counter = 0;


function setup() {
    createCanvas(400, 400);
    noFill();
}


function draw() {

    //background(255);
    frameRate(60);
    rectMode(CENTER);

    push();
    translate(width / 2, height / 2);
    rotate(counter++);
    scale(2.0);
    stroke(random(255), random(255), random(255));
    rect(0, 0, 50, 50);


    rect(0, 20, 10,10);
    pop();


    rect(0, 0, 100, 100);




}
