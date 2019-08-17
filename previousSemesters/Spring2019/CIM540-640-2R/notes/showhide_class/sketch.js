var showButton, hideButton;

var showingOrHiding = 0; // 0 is hiding, 1 is showing

function setup() {
  // put setup code here
  createCanvas(500,500);
  noStroke();
  showButton = createButton("show");
  showButton.position(10,40);
  showButton.mousePressed(function(){
    //set the action, what do you want the mouse pressed to do

      //ellipse()
      //fill(0);
      //ellipse(width/2, height/2, 100,100);

      showingOrHiding = 1;

  });

  hideButton = createButton("hide");
  hideButton.position(100,40);
  hideButton.mousePressed(function(){
  //  fill(255);
  //  ellipse(width/2, height/2, 100,100);

    showingOrHiding = 0;
  });


}

function draw() {
  // put drawing code here
  background(255);


  if(showingOrHiding == 1){
    fill(0);
    ellipse(mouseX, mouseY, 10,10);
  }

  if(showingOrHiding == 0){
    
  }

}
