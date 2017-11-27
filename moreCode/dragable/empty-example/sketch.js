var interfaceItems = [];

var locX = 200;
var locY = 200;
var curBack = 255;

function setup() {
  createCanvas(400, 400);

  interfaceItems.push(new interface(100, 100, 50, color(255, 0, 0)));

  interfaceItems.push(new interface(200, 100, 50, color(0, 255, 0)));
}


function draw() {
  background(curBack);
  fill(0);
  ellipse(locX, locY, 10, 10);


  interfaceItems[0].check();
  interfaceItems[0].display();
  interfaceItems[1].check();
  interfaceItems[1].display();

  if (interfaceItems[0].drag == true) {
    interfaceItems[0].x = mouseX;
    interfaceItems[0].y = mouseY;
  }

  if (interfaceItems[1].drag == true) {
    interfaceItems[1].x = mouseX;
    interfaceItems[1].y = mouseY;
  }

  if (interfaceItems[0].drag == false && interfaceItems[1].drag == false) {
    var loc0 = dist(locX, locY, interfaceItems[0].x, interfaceItems[0].y);
    if (loc0 < 10) {
      curBack = 200;
    }

    var loc1 = dist(locX, locY, interfaceItems[1].x, interfaceItems[1].y);
    if (loc1 < 10) {
      curBack = 100;
    }
  }
  //console.log(interfaceItems[0].check());
}

function mousePressed() {
  if (interfaceItems[0].check() == true) {
    if (interfaceItems[0].drag == false) {
      interfaceItems[0].drag = true;
    } else {
      interfaceItems[0].drag = false;
    }
  }

  if (interfaceItems[1].check() == true) {
    if (interfaceItems[1].drag == false) {
      interfaceItems[1].drag = true;
    } else {
      interfaceItems[1].drag = false;
    }
  }

}


function interface(tempX, tempY, tempBoxSize, tempColor) {
  this.x = tempX;
  this.y = tempY;
  this.boxSize = tempBoxSize;
  this.setFill = tempColor;
  this.overlay = false;
  this.drag = false;

  this.display = function() {
    fill(this.setFill);
    rect(this.x, this.y, this.boxSize, this.boxSize);

    if (this.overlay == true) {
      fill(127, 200);
      rect(this.x, this.y, this.boxSize, this.boxSize);
    }
  }

  this.check = function() {
    if (mouseX >= this.x && mouseX < (this.x + this.boxSize) && mouseY >= this.y && mouseY < (this.y + this.boxSize)) {
      this.overlay = true;
      return true;
    } else {
      this.overlay = false;
      return false;
    }
  }

}
