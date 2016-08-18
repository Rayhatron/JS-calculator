var inputNum = "";
var displayDiv = "#display";
var hasDecimal = false;

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
  hasDecimal = false;
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

function getLastItem(){
  var tempArr = inputNum.split("");
  var index = tempArr.length - 1;
  var arrItem = tempArr[index];
  return arrItem;
}

function addDecimal(){
  if(hasDecimal){
    alert("Number already contains a decimal point.")
  }else{
    if(isNaN(getLastItem()) == false){
      inputNum += ".";
      $(displayDiv).text(inputNum);
      hasDecimal = true;
    }
  }
}


function calculate(){
  if(inputNum == ""){
    alert("Please enter a valid expression.");
    return;
  }

  if(isNaN(getLastItem()))
  {
    alert("Expression must end with a number!");
  }else{
    if(inputNum !== ""){
      hasDecimal = false;
      inputNum = "" + eval(inputNum);
      $(displayDiv).text(inputNum);
      if(inputNum.includes(".")){
        hasDecimal = true;
      }
      console.log(inputNum);
    }
  }
}
