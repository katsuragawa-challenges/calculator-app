"use strict";

// get key elements
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const dot = document.getElementById("dot");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const del = document.getElementById("del");


const equal = document.getElementById("equal");
console.log(equal);

// display
const display = document.getElementsByClassName("display-content");
display.innerHTML = "";

console.log(display);


console.log(two);

one.addEventListener("click", () => {
  console.log("clicked one");
  display.innerText += 1;
});