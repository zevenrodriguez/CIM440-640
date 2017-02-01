var randomHello = [];

function setup() {
  randomHello.push("Hello");
  randomHello.push("Parev");
  randomHello.push("Goddag");
  randomHello.push("Bonjour");
  randomHello.push("Halo");
  randomHello.push("Aloha");
  randomHello.push("Shalom");
  randomHello.push("Sawubona");
  
  //removes first item in the array
  console.log(randomHello.shift());
  console.log(randomHello);
   
  //removes last item in the array
  console.log(randomHello.pop());
  console.log(randomHello);
  
  //sort array
  console.log(randomHello.sort());
  console.log(randomHello);
  
  //reverse array
  console.log(randomHello.reverse());
  console.log(randomHello);

}

function draw() {
  
}