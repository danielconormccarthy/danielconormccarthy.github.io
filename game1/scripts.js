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

}

function goDown(){
  
    y = y + speed;
    mydiv.style.top = y;
}

function goUp(){
  
    y = y - speed;
    mydiv.style.top = y;
}

function goleft(){
    x = x - speed;
    mydiv.style.left = x;
}






mydiv.onmouseover=moveDiv;
//setInterval(moveDiv,1)


function logIt(){
    console.log(1);
 
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

}

function goDown2(){
  
    y2 = y2 + speed;
    player_2.style.top = y2;
}

function goUp2(){
  
    y2 = y2 - speed;
    player_2.style.top = y2;
}

function goleft2(){
    x2 = x2 - speed;
    player_2.style.left = x2;
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












