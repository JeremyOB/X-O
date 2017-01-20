
window.onload = function(){ //adds event listner to all the div ids given
  var elements = document.querySelectorAll("#s-0, #s-1, #s-2, #s-3, #s-4, #s-5, #s-6, #s-7, #s-8"); // all the div ids
  for (var i = 0; i < elements.length; i++) { 
    elements[i].addEventListener('click', runGame);
  }

 }


function clearGame() {
  console.log("jello.. i mean CLEAR!");
 var allElements =document.querySelectorAll("#s-0, #s-1, #s-2, #s-3, #s-4, #s-5, #s-6, #s-7, #s-8");
 var allBoxes = [];
 for (var i = 0, n = allElements.length; i < n; ++i) {
   var el = allElements[i];
   if (el.className) { el.className="empty box"}
  }

}



//the game global variabls
var turn = "x";//who goes first. 
var state = []; //array of the game state 
var winArr =[]; 
var Xwin= "X box,X box,X box";
var Owin= "O box,O box,O box";


function runGame(){
 
  if (turn == "x") {markX(); turn = "o"} // if its x's turn to go, then make it o's turn
  else {markO(); turn = "x"}
  getState();
  getWinArr();
  checkForWin();
  checkForBlock();
  // ai();
}

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

function getState(){ //puts the current game state into an array

 var allElements =document.querySelectorAll("#s-0, #s-1, #s-2, #s-3, #s-4, #s-5, #s-6, #s-7, #s-8");
 var allBoxes = [];
 for (var i = 0, n = allElements.length; i < n; ++i) {
   var el = allElements[i];
   if (el.className) { allBoxes.push(el.className)}
  }
 state=allBoxes;

}

 
 function getWinArr(){//over write state from last turn with current state and puts each winning combonantion into its own slot in winArr

winArr.splice(0,8,[state[0],state[1],state[2]]  //top horizontal
                 ,[state[3],state[4],state[5]]  //mid horizontal
                 ,[state[6],state[7],state[8]]  //bot horizontal
                 ,[state[0],state[3],state[6]]  //left vertical
                 ,[state[1],state[4],state[7]]  //midd vertical
                 ,[state[2],state[5],state[8]]  //rigt vertical
                 ,[state[0],state[4],state[8]]  //diaganal \
                 ,[state[2],state[4],state[6]]);//diaganal / 

 }

function checkForWin(){
             

 for (var i = 0; i < winArr.length; i++) {
    winLine= String(winArr[i])
    if (winLine == Xwin) {alert("X wins")};
    if (winLine == Owin) {alert("O wins")};
  }
}

function checkForBlock(){
  var blockable = false;  
for (var i = 0; i < winArr.length && blockable == false; i++) {
   blockLine = (winArr[i])
  console.log(winArr[1][2])
blockable=true;
}

}



// function ai(){//atempt to imploment the minimax allgarithm
//  var ranBox ="s-"+ Math.floor((Math.random() * 8) + 1);
//  var y = document.getElementById(ranBox).className;
//  for (var y = document.getElementById(ranBox).className; y !="empty box") {
//   var ranBox ="s-"+ Math.floor((Math.random() * 8) + 1);
//   if (y="empty box") {document.getElementById(ranBox).className = "O box";} else{};
// }


// console.log("this is var ranBox "+ranBox);
// console.log("this is var y "+y);

// }