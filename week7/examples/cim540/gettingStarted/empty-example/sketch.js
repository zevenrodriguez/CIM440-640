var bgColor = "green";

function setup(){
    createCanvas(500,500);

    background(125);
    background(255,0,0);
    background("#333333");
    background("cyan");

    background(bgColor);

}

function draw(){
    ellipse(250,250, 100,100);
}
