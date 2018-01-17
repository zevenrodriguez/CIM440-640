var eColor = 0;
var counter = 0;
var bgColor = "white";

function setup() {
    createCanvas(400, 400);
    eColor = color(235, 122, 79);
}

function draw() {
    background(bgColor);

    fill(eColor);
    ellipse(width / 2, height / 2, 200, 200);

    if(mouseX > width/2){
       eColor = color(200,262,15);
    }else{
        eColor = color(123,45,222);
    }

    if(counter == 1){
        bgColor = "orange";
    }else if(counter == 2){
        bgColor = "pink";
    }else if(counter == 3){
        bgColor = "red";
    }else{
       bgColor = "white";
    }

    if(counter > 3){
        counter = 0;
    }


}


function mousePressed() {
    counter = counter + 1;
    console.log(counter);
}
