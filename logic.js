function makeX(){

  var target = event.target || event.srcElement;//get the info of the object that has been clicked
  var clicked_id = target.id //make variable "clicked_id" equal the id of the clicked object


  if  (document.getElementById(clicked_id).className.match(/(?:^|\s)box-style X(?!\S)/) ){//check to see if the clicked_id is X 
       document.getElementById(clicked_id).className = "box-style O";} //if clicke_id is X make it an O
  else{ 
       document.getElementById(clicked_id).className = "box-style X";//if clicked_id is not an X make it X
       console.log(target)
};
 
}
 window.onload = function() // need to some how put into one line...
    {
      document.getElementById("s-0").addEventListener( 'click', makeX);//If "s-0" is clicke on call function make X
      document.getElementById("s-1").addEventListener( 'click', makeX);
      document.getElementById("s-2").addEventListener( 'click', makeX);
      document.getElementById("s-3").addEventListener( 'click', makeX);
      document.getElementById("s-4").addEventListener( 'click', makeX);
      document.getElementById("s-5").addEventListener( 'click', makeX);
      document.getElementById("s-6").addEventListener( 'click', makeX);
      document.getElementById("s-7").addEventListener( 'click', makeX);
      document.getElementById("s-8").addEventListener( 'click', makeX);
    }

    console.log("js linked") // show if the page has loaded the .js file

//working on enumeration here..,
 var allElements = document.getElementsByTagName("*");
 var allIds = [];
for (var i = 0, n = allElements.length; i < n; ++i) {
 var el = allElements[i];
 if (el.id) { allIds.push(el.id); }
}
window.alert(allIds);
