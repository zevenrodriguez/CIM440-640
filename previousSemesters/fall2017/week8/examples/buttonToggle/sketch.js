var blackWhite;

var toggle = false;

var bgColor = 255;

function setup() {
    blackWhite = createButton('Toggle White/Black');
    blackWhite.mousePressed(blackWhiteFunc);
}

function draw() {

    background(bgColor);
}


function blackWhiteFunc() {
    if (toggle == false) {
        toggle = true;
        bgColor = 0;
    } else {
        toggle = false;
        bgColor = 255;
    }
}
