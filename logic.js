console.log("js linked")

window.onload = function()
    {
        document.getElementById("MyElement").addEventListener( 'click', changeClass);
    }
    
function makeX(){

  var target = event.target || event.srcElement;
  var id = target.id

  document.getElementById(id).className = "box-style X";
  console.log(target)
}

//Dan rocks