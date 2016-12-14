/* 

index
10 - on click listner for each square
20 - the main game loop that is initalized each time an element is clicked
30 - array of the winning states
40 - mark x function 
50 - mark o function 
60 - get the state of the game for comparison 
70 -  compare the current game state with the winning states 

*/



window.onload = function(){ //adds event listner to all the div ids given
  var elements = document.querySelectorAll("#s-0, #s-1, #s-2, #s-3, #s-4, #s-5, #s-6, #s-7, #s-8"); // all the dive ids give
  for (var i = 0; i < elements.length; i++) { 
    elements[i].addEventListener('click', runGame);
  }
}

var turn = "x";//who goes first. also place holder 

function runGame(){
 
  if (turn == "x") {markX(); turn = "o"} // if its x's turn go, then make it o's turn
  else {markO(); turn = "x"};
  getState(); // puts all of the class's into a string for comparing to the winning conbo's
  checkGameState(); //compare the state of the game with all of the winning states 
}

var allwinningstates = [
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

  var target = event.target || event.srcElement;//get the info of the object that has been clicked || IE version
  var clicked_id = target.id //make variable "clicked_id" equal the id of the clicked object
  if (document.getElementById(clicked_id).className.match(/(?:^|\s)empty box(?!\S)/) ){
  document.getElementById(clicked_id).className = "X box";
}

}

function markO(){ //change div class to o

  var target = event.target || event.srcElement;//get the info of the object that has been clicked
  var clicked_id = target.id //make variable "clicked_id" equal the id of the clicked object
  if (document.getElementById(clicked_id).className.match(/(?:^|\s)empty box(?!\S)/) ){
  document.getElementById(clicked_id).className = "O box";
}
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
  
  for (var i = 0, n = allwinningstates.length; i < n; ++i) {

    console.log(i)
      if (gameState == allwinningstates[i]) {
    alert("Game Over");

    }
    
  }
}


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

// ...............................................:................................
// ........................................,.....OMM...............................
// .......................:MM....MM8......MMM....+MM...............................
// .......................,MM....DMMMM?..MMM+.....MM........:MMMM..................
// ........................MM.......NMMMMMM.......MM......,MMMMMMMN................
// ........:NMMM~..........MM.........DMMMM,......MM......MMM,...MMM...............
// ......,MMMMMMMM.........MM,.......MMM:MNMM.....MM.....,MM,.....8M+..............
// ......MMM....,MM........MM$.....+MMM....MM.....MM7.....MMMMMNMMMM...............
// ......MM,....,MM........MMM....DMDN............MMN......7MMMMMMM................
// ......IMMMMMMMMM........MMM.....N+.............MMM..............................
// ........MMMMMM..........ZMM....................MMM..............................
// ........................,MM....................ZMM..............,=$DOOMNMM......
// ...,....................,MM........,.,:+I8DMMMNMMMMMMMMMMMMMMMNMMMMMMMMMNM,.....
// .=OI?DOMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNDMMNDDMMDI,:,.....~+......
// .MMMMMMMMMMDDMMMNMMDMMMMMMMMMMMMMDD87~,,,,.....,MM,.............................
// ..,,:,,,.................MMM....................MM.............:M...............
// .........................MMM....MM......MMM.....MM:.....MM$...MMMD..............
// ...........:8MMMM........8MM....MMMM...MMMN.....MM?.....~MMMNMMM~...............
// ........,MMMMMMMMM.......~MM.....,MMMMMMM.......MMO.......NMMMM,................
// .......,MMM$....,M7.......MM........MMMMM:......MMM......OMMMMMMM,..............
// .......?MM......IMM......,MM.......MMM~MMMMM....MMM.....MMMD...ZMM..............
// ........MMMMMMMMMM,.......MM.....MMMM....,MMM...MMM.....MM......................
// ,........~MMMMMMO.........MMO.....M7........,...MMM.............................
// ..........................MMM...................DMM.......,,=$MMMMMMMMMMMM......
// ..........................MMM:~:+ZZDMNMMMMMMMMMMMMMMMMMMMMMMMMMMDMMMMOMMMM......
// ....MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMNMNMMMDMMMMMMMI~................
// ....MMMMMMMMMMMDMMMNMNMMNMMDMMMM7~~,::...........MMI............................
// ..........................,MM,...................MMM......M~.....MM.............
// ..........:................MM,......DMMMO~.......MMM......MMM..MMMM,....,.......
// ..........MM7...,MM........MM+.....MMMM8MMM......MMM.......MMMMMM?..............
// ..........:MMMO=MMM........MMM....MMM.....MM.....MMM........+MMMM=..............
// ............:MMMMM.........MMM....MM......8MZ....NMM.......OMM:NMMMM............
// ............=MMMMMM........MMM....MM8,...IMM8....ZMM......MMM.....NM:...........
// ..........,MMMM..MMMM......MMM....:MMMMMMMMZ.....,MM?......I....................
// ..........MMM......8MM,....MMM.......,:,,.........MMM...........................
// ...........I........=M7....MMM....................MMM...........................
// ...........................MMM..................................................
// ....,.......................,,..................................................
