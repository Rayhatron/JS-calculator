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

function addOperator(operator){
  if(inputNum !== ""){
  inputNum += operator;
  $(displayDiv).text(inputNum);
    }
}

function clearAll(){
  inputNum = "";
  $(displayDiv).text(inputNum);
}

function backSpace(){
  var tempArr = inputNum.split("");
  var tempArr2 = [];
  tempArr.pop();
  inputNum = tempArr.join("");
  //inputNum = inputNum.pop();
  $(displayDiv).text(inputNum);
  console.log(inputNum);

}
