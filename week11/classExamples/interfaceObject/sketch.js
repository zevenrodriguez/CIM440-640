var iArray = [];

var currentType = "";

function setup() {
    createCanvas(400, 400);
    iArray.push(new interface(50, 299, 100, "start"));
    iArray.push(new interface(150, 299, 100, "stop"));
    iArray.push(new interface(250, 299, 100, "reset"));
}

function draw() {
    background(255);
    for (var i = 0; i < iArray.length; i++) {

        var checking = iArray[i].check();

        var settingAlpha;
        if (checking == true) {
            //console.log("currently over " + iArray[i].type);
            settingAlpha = 100;
        }else{
            settingAlpha = 255;
        }

         iArray[i].display(settingAlpha);
    }
}

function mousePressed(){
    for(var i = 0; i < iArray.length; i++){
        var checkInterface = iArray[i].check();
        if(checkInterface == true){
            currentType = iArray[i].type;
            console.log("current type = " + currentType);
        }
    }
}











function interface(tempX, tempY, tempSize, tempType) {
    this.x = tempX;
    this.y = tempY;
    this.size = tempSize;
    this.type = tempType;

    this.display = function (setAlpha) {

        if (this.type == "start") {
            fill(255, 0, 0, setAlpha);
        } else if (this.type == "stop") {
            fill(0, 255, 0, setAlpha);
        } else if (this.type == "reset") {
            fill(0, 0, 255, setAlpha);
        }

        rect(this.x, this.y, this.size, this.size);
    }

    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.size) && mouseY > this.y && mouseY < (this.y + this.size)) {
            return true;
        } else {
            return false;
        }
    }

}
