var frameAmounts = 4;
var frameArray = [];
var currentFrame = 0;


var interval = 2000;
var pMillis = 0;
var appear = false;

function preload() {
    for (var frames = 0; frames < frameAmounts; frames++) {
        var frameString = "assests/Thatwasclose" + frames + ".jpg";
        frameArray[frames] = loadImage(frameString);
    }
}

function setup() {
    createCanvas(500, 500);
    frameRate(60);
}

function draw() {
    //console.log(millis());



    image(frameArray[currentFrame], 0, 0);


    if (millis() - pMillis >= interval) {
        currentFrame++; // Next frame
        pMillis = millis();
        appear = true;
    }

    if (currentFrame == frameArray.length) {
        currentFrame = 0;
        // Return to first frame
    }

    if(appear == true){
        ellipse(mouseX,mouseY, 100,100);
    }


}
