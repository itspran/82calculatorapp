let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let out = document.getElementById("sum-el");

function add() {
  out.textContent = "Sum: " + (num1 + num2);
}

function subtract() {
  out.textContent = "Difference: " + (num1 - num2);
}

function divide() {
  out.textContent = "Quotient: " + num1 / num2;
}

function multiply() {
  out.textContent = "Product: " + num1 * num2;
}
