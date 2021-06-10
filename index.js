// get elements
const display = document.querySelector(".display-content");
const numberKeys = document.querySelectorAll(".number");
const operatorKeys = document.querySelectorAll(".operator");
const del = document.getElementById("del");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");

let firstNum = 0;
let secondNum = 0;
let result = 0;
let operator = "";

// setup event handlers
const handleNumberClick = (e) => {
  console.log(`clicked ${e.target.innerText}`);
  if (display.innerText === "0" && e.target.id !== "dot") {
    display.innerText = "";
  }
  const num = e.target.innerText;
  if (display.innerText.length < 15) {
    display.innerText += num;
  } else {
    alert("Number too long for display");
  }
};

const handleOperation = (e) => {
  operation = e.target.id;
  if (display.innerText !== "0") {
    firstNum = Number(display.innerText);
    console.log(`first number = ${firstNum}`);
    display.innerText = "0";
  }
};

const handleDel = (e) => {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText.length === 0) {
    display.innerText = "0";
  }
};

const handleResult = (e) => {
  secondNum = Number(display.innerText);
  console.log(firstNum, operation, secondNum);
  switch (operation) {
    case "plus":
      result = firstNum + secondNum;
      break;
    case "minus":
      result = firstNum - secondNum;
      break;
    case "multiply":
      result = firstNum * secondNum;
      break;
    case "divide":
      result = firstNum / secondNum;
      break;
  }
  if (String(result).length > 16) {
    alert("Number too long for display");
  } else {
    display.innerText = result;
  }
};

const handleReset = (e) => {
  firstNum = 0;
  secondNum = 0;
  display.innerText = "0";
};

// add event listeners
numberKeys.forEach((number) =>
  number.addEventListener("click", handleNumberClick)
);
operatorKeys.forEach((operator) =>
  operator.addEventListener("click", handleOperation)
);
del.addEventListener("click", handleDel);
equal.addEventListener("click", handleResult);
reset.addEventListener("click", handleReset);
