getState();

window.onload = function(){ //adds event listner to all the div ids given
  var elements = document.querySelectorAll("#s-0, #s-1, #s-2, #s-3, #s-4, #s-5, #s-6, #s-7, #s-8"); // all the dive ids give
  for (var i = 0; i < elements.length; i++) { 
    elements[i].addEventListener('click', runGame);
  }
}

 var turn = 1;
function runGame(){
 
  if (turn == 1) {markX(); turn = 2}
  else{markO(); turn = 1};
  getState();
  checkGameState();


}

var allwinningcombos = [
 "box-container,X box,X box,X box,empty box,empty box,empty box,empty box,empty box,empty box",  //horizontal top
 "box-container,empty box,empty box,empty box,X box,X box,X box,empty box,empty box,empty box",  //horizontal middle 
 "box-container,empty box,empty box,empty box,empty box,empty box,empty box,X box,X box,X box",  //horizontal bottom
 "box-container,x box,empty box,empty box,X box,empty box,empty box,X box,empty box,empty box",  //vertical left
 "box-container,empty box,X box,empty box,empty box,X box,empty box,empty box,X box,empty box",  //vertical middle
 "box-container,empty box,empty box,X box,empty box,empty box,X box,empty box,empty box,X box",  //vertical right
 "box-container,X box,empty box,empty box,empty box,X box,empty box,empty box,empty box,X box",  //diaganal \
 "box-container,empty box,empty box,X box,empty box,X box,empty box,X box,empty box,empty box",  //diaganal /
  ];

  

function markX(){ //change div class to x or o

  var target = event.target || event.srcElement;//get the info of the object that has been clicked
  var clicked_id = target.id //make variable "clicked_id" equal the id of the clicked object
  document.getElementById(clicked_id).className = "X box";

}

function markO(){ //change div class to o

  var target = event.target || event.srcElement;//get the info of the object that has been clicked
  var clicked_id = target.id //make variable "clicked_id" equal the id of the clicked object
  document.getElementById(clicked_id).className = "O box";

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
  
  for (var i = 0, n = allwinningcombos.length; i < n; ++i) {

    console.log(i)
      if (gameState == allwinningcombos[i]) {
    alert("Game Over");

    }
    
  }
}

console.log("js linked"); // show if the page has loaded the .js file



// function markX(){ //change div class to x or o

//   var target = event.target || event.srcElement;//get the info of the object that has been clicked
//   var clicked_id = target.id //make variable "clicked_id" equal the id of the clicked object

//   if  (document.getElementById(clicked_id).className.match(/(?:^|\s)X box(?!\S)/) ){//check to see if the clicked_id is X 
//        document.getElementById(clicked_id).className = "O box";} //if clicke_id is X make it an O
//   else{ 
//        document.getElementById(clicked_id).className = "X box";//if clicked_id is not an X make it X
//        console.log(target)
//      };
// }