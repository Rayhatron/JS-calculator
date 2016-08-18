var expression = "";
var displayDiv = "#display";
var hasDecimal = false;
var inputNum = "";
var answer = "";

$(document).ready(function(){

  //display.text("Hello");



});

function addDigit (digit){
  answer = "";
  inputNum += digit;
  if(inputNum.length >= 9){
    alert("Number has reached limit.");
    return;
  }

    expression += digit;
    $(displayDiv).text(inputNum);
  //document.getElementById('myContainer').style.backgroundColor = "red";
  //alert("Click");
}

function addOperator(operator){
  inputNum = "";
  expression += answer;
  if(isNaN(getLastItem())){
    alert("Please enter a number next.");
    return;
  }
  if(expression !== ""){
  expression += operator;
  $(displayDiv).text(operator);
  hasDecimal = false;
  console.log(expression);
    }
}

function clearAll(){
  inputNum = "";
  expression = "";
  answer = "";
  $(displayDiv).text(expression);
}

function backSpace(){
  var tempArr = expression.split("");
  var tempArr2 = inputNum.split("");
  tempArr.pop();
  tempArr2.pop();
  inputNum = tempArr2.join("");
  expression = tempArr.join("");
  //expression = expression.pop();
  $(displayDiv).text(inputNum);
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
      inputNum += "."
      expression += ".";
      $(displayDiv).text(inputNum);
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
      inputNum = "";
      hasDecimal = false;
      expression = "" + eval(expression);
      $(displayDiv).text(expression);
      answer = "" + expression;
      expression = "";
      if(expression.includes(".")){
        hasDecimal = true;
      }
      console.log(expression);
    }
  }
}
