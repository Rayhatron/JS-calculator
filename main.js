var expression = "";
var displayDiv = "#display";
var hasDecimal = false;

$(document).ready(function(){

  //display.text("Hello");



});

function addDigit (digit){

  expression += digit;
  $(displayDiv).text(expression);
  //document.getElementById('myContainer').style.backgroundColor = "red";
  //alert("Click");
}

function addOperator(operator){
  if(expression !== ""){
  expression += operator;
  $(displayDiv).text(expression);
  hasDecimal = false;
    }
}

function clearAll(){
  expression = "";
  $(displayDiv).text(expression);
}

function backSpace(){
  var tempArr = expression.split("");
  var tempArr2 = [];
  tempArr.pop();
  expression = tempArr.join("");
  //expression = expression.pop();
  $(displayDiv).text(expression);
  console.log(expression);

}

function getLastItem(){
  var tempArr = expression.split("");
  var index = tempArr.length - 1;
  var arrItem = tempArr[index];
  return arrItem;
}

function addDecimal(){
  if(hasDecimal){
    alert("Number already contains a decimal point.")
  }else{
    if(isNaN(getLastItem()) == false){
      expression += ".";
      $(displayDiv).text(expression);
      hasDecimal = true;
    }
  }
}

function makeNegative(){
  alert("Ooops, this feature is not yet implemented.");
  }


function calculate(){
  if(expression == ""){
    alert("Please enter a valid expression.");
    return;
  }

  if(isNaN(getLastItem()))
  {
    alert("Expression must end with a number!");
  }else{
    if(expression !== ""){
      hasDecimal = false;
      expression = "" + eval(expression);
      $(displayDiv).text(expression);
      if(expression.includes(".")){
        hasDecimal = true;
      }
      console.log(expression);
    }
  }
}
