var colorArray = ["white", "green", "pink", "purple", "blue", "orange", "yellow"];

var counter = 0;

function setup() {
    createCanvas(400,400);
    console.log(colorArray[2]);

    console.log(colorArray.length);
}

function draw() {
    background(colorArray[counter]);

}

function mousePressed(){

    counter = counter + 1;


    if(counter > colorArray.length-1){
        counter = 0;
    }
}
