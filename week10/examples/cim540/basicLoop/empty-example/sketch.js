var lines = [0,0,400,0];

function setup() {
    createCanvas(400, 400);
}


function draw() {
    //frameRate(1);
    background(255);
//    for(var i = 0; i<=10; i++){
//        console.log(i);
//        ellipse(random(width),random(height), 10, 10);
//    }

    for(var i = 0; i<=height; i++){
        stroke(random(256));
        strokeWeight(1);
        lines[1] = i;
        lines[3] = i;
        line(lines[0],lines[1],lines[2],lines[3]);
    }
}
