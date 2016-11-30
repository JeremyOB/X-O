console.log("js linked")


window.onload = function()
    {
      
        var target = event.target || event.srcElement; //get the info of the object that has been clicked
        var id = target.id  //make variable "id" equal the id of the clicked object
        document.getElementById(id).addEventListener( 'click', makeX); // listen for a click and exicute the function makeX
    }
    
function makeX(){

  document.getElementById(id).className = "box-style X";
  console.log(target)
}

//Dan rocks
// where can i find these rocks? 