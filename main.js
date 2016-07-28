var inputNum = "";
var displayDiv = "#display";

$(document).ready(function(){

  //display.text("Hello");



});

function addDigit (digit){

  inputNum += digit;
  $(displayDiv).text(inputNum);
  //document.getElementById('myContainer').style.backgroundColor = "red";
  //alert("Click");
}
