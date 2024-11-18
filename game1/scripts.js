//alert( );

console.log("hi");

// when click, do something
// get position and change


var mydiv = document.getElementById("mydiv");
var player_2 = document.getElementById("player_2");


mydiv.style.position = "absolute";
player_2.style.position = "absolute";

var x = 1;
var y = 1;
var speed = 25;
var direction = 'right';

// when a box moves
// know if they are touching
// if they are touching, then show the explode gif and hide the blocks.





function moveDiv (){


    
    if(direction == 'right'){
        goRight();
    }

    if(direction == 'left'){
        
 
        goleft();
    }

    if(x > 1000){
        console.log("Change Direction to Left");
        direction = 'left'
    }
    
    if(x < 5){
        console.log("Change Direction to right");
        direction = 'right'   
    }

}

function goRight(){
    x = x + speed;
    mydiv.style.left = x;
    playerMoved();
}

function goDown(){
  
    y = y + speed;
    mydiv.style.top = y;
    playerMoved();}

function goUp(){
  
    y = y - speed;
    mydiv.style.top = y;
    playerMoved();}

function goleft(){
    x = x - speed;
    mydiv.style.left = x;
    playerMoved();}






mydiv.onmouseover=moveDiv;
//setInterval(moveDiv,1)


function logIt(){
    console.log(1);
;
}

logIt();

setInterval(logIt,1000)








  var x2 = 1;
  var y2 = 1;
  var speed2 = 25;
  var direction2 = 'right';
  



function goRight2(){
    x2= x2+ speed;
    player_2.style.left = x2;
    playerMoved();
}

function goDown2(){
  
    y2 = y2 + speed;
    player_2.style.top = y2;

    playerMoved();  }

function goUp2(){
  
    y2 = y2 - speed;
    player_2.style.top = y2;
    playerMoved();
}

function goleft2(){
    x2 = x2 - speed;
    player_2.style.left = x2;
    playerMoved();
}








function playerMoved(){
  console.log('it moved');
  if(playersAreTouching())
{
  // show picture

  alert("boom");
}

}

function playersAreTouching(){

  var x_ = x + 40;
  var y_ = y + 40;
  console.log(`x: ${x}. x_: ${x_}. y: ${y}. y_: ${y_}`)

  var x2_ = x2 + 40;
  var y2_ = y2 + 40;
  console.log(`x2: ${x2}. x2_: ${x2_}. y2: ${y2}. y2_: ${y2_}`)

 if(x2 >= x && x2 <= x_
    && y2 >= y && y2 <= y_)
{
  console.log("TOUCH!!!");
  return true;
 }
 else{return false;}




}












document.addEventListener("keydown", function(event) {
    // Check if the pressed key is the down arrow (key code 40)
    if (event.key === "ArrowDown") {
        goDown();  // Call the function when down arrow is pressed
      }
      if (event.key === "ArrowUp") {
        goUp();  // Call the function when down arrow is pressed
      }
      if (event.key === "ArrowRight") {
        goRight();  // Call the function when down arrow is pressed
      }
      if (event.key === "ArrowLeft") {
        goleft();  // Call the function when down arrow is pressed
      }

      if (event.key === "s") {
        goDown2();  // Call the function when down arrow is pressed
      }
      if (event.key === "w") {
        goUp2();  // Call the function when down arrow is pressed
      }
      if (event.key === "d") {
        goRight2();  // Call the function when down arrow is pressed
      }
      if (event.key === "a") {
        goleft2();  // Call the function when down arrow is pressed
      }









  });












