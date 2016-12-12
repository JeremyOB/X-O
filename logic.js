getState();

window.onload = function(){ //adds event listner to all the div ids given
  var elements = document.querySelectorAll("#s-0, #s-1, #s-2, #s-3, #s-4, #s-5, #s-6, #s-7, #s-8"); // all the dive ids give
  for (var i = 0; i < elements.length; i++) { 
    elements[i].addEventListener('click', runGame);}
}


function runGame(){
  changeChar();
  getState();
  checkGameState();
}

var gameState = "new game"

var winConbo1 = "box-container,X box,X box,X box,empty box,empty box,empty box,empty box,empty box,empty box"  
var winConbo2 = "box-container,empty box,empty box,empty box,X box,X box,X box,empty box,empty box,empty box"  
var winConbo3 = "box-container,empty box,empty box,empty box,empty box,empty box,empty box,X box,X box,X box"  
var winConbo4 = "box-container,empty box,empty box,empty box,empty box,empty box,empty box,empty box,empty box,empty box"  
var winConbo5 = "box-container,empty box,empty box,empty box,empty box,empty box,empty box,empty box,empty box,empty box"  
var winConbo6 = "box-container,empty box,empty box,empty box,empty box,empty box,empty box,empty box,empty box,empty box"  
var winConbo7 = "box-container,empty box,empty box,empty box,empty box,empty box,empty box,empty box,empty box,empty box"  
var winConbo8 = "box-container,empty box,empty box,empty box,empty box,empty box,empty box,empty box,empty box,empty box" 


function changeChar(){ //change div class to x or o

  var target = event.target || event.srcElement;//get the info of the object that has been clicked
  var clicked_id = target.id //make variable "clicked_id" equal the id of the clicked object

  if  (document.getElementById(clicked_id).className.match(/(?:^|\s)X box(?!\S)/) ){//check to see if the clicked_id is X 
       document.getElementById(clicked_id).className = "O box";} //if clicke_id is X make it an O
  else{ 
       document.getElementById(clicked_id).className = "X box";//if clicked_id is not an X make it X
       console.log(target)
     };
}

//working on enumeration here..,
function getState(){

 var allElements = document.getElementsByTagName("*");
 var allClass = [];
 for (var i = 0, n = allElements.length; i < n; ++i) {
   var el = allElements[i];
     if (el.className) { allClass.push(el.className); 
     }
 }

  gameState = String(allClass)
  console.log(gameState);
 
}


function checkGameState(){
  if (gameState == winConbo1 || winConbo2 || winConbo3 ) {
    alert("Game Over")
};
}






      // document.getElementById("s-0").addEventListener( 'click', makeX);
      // document.getElementById("s-1").addEventListener( 'click', makeX);
      // document.getElementById("s-2").addEventListener( 'click', makeX);
      // document.getElementById("s-3").addEventListener( 'click', makeX);
      // document.getElementById("s-4").addEventListener( 'click', makeX);
      // document.getElementById("s-5").addEventListener( 'click', makeX);
      // document.getElementById("s-6").addEventListener( 'click', makeX);
      // document.getElementById("s-7").addEventListener( 'click', makeX);
      // document.getElementById("s-8").addEventListener( 'click', makeX);
    

    console.log("js linked"); // show if the page has loaded the .js file



