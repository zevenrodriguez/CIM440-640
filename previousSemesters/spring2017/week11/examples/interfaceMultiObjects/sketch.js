var interfaceItems = [];

var currentType = "";

function setup() {
    createCanvas(400, 400);


    interfaceItems.push(new interface(50, 300, 100, "start"));
    interfaceItems.push(new interface(150, 300, 100, "stop"));
    interfaceItems.push(new interface(250, 300, 100, "restart"));

}

function draw() {

    background(255);
    fill(0);
    text(currentType, 10, 10);

    for (var i = 0; i < interfaceItems.length; i++) {
        var currentItemCheck = interfaceItems[i].check();
        console.log(currentItemCheck);
        var settingFill;
        if (currentItemCheck == true) {
            settingFill = 100;
        } else {
            settingFill = 255;
        }
        interfaceItems[i].display(settingFill);

    }

    if (currentType == "start") {

    } else if (currentType == "stop") {

    } else if (currentType == "restart") {

    }

}


function interface(tempX, tempY, tempBoxSize, tempType) {

    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempBoxSize;
    this.type = tempType;


    this.display = function (setFill) {

        if (this.type == "start") {
            fill(0, 255, 0, setFill);
        } else if (this.type == "stop") {
            fill(255, 0, 0, setFill);
        } else if (this.type == "restart") {
            fill(0, 0, 255, setFill);
        }

        rect(this.x, this.y, this.boxSize, this.boxSize);
    }


    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)) {
            return true;
        } else {
            return false;
        }
    }
}

function mousePressed() {

    for (var i = 0; i < interfaceItems.length; i++) {
        var checkItem = interfaceItems[i].check();
        if (checkItem == true) {
            currentType = interfaceItems[i].type;
            console.log(currentType);
        }
    }

}
