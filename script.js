const calculator = document.querySelector(".calculator");
const number = document.querySelector(".number-container");

let value = 0;
let first = "";
let second = "";
let current = "";
let clearNextNumber = false;

const operator = ["+", "-", "*", "/"];

const buttonCalculator = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  //   ".",
  "=",
  "0",
  "+",
];

function genCalculatorGrid() {
  buttonCalculator.map((btn) => {
    const calElement = document.createElement("button");
    calElement.innerText = btn;
    calElement.classList.add("btn");
    number.appendChild(calElement);
  });
}

function init() {
  screen.innerText = defaultValue;
}

genCalculatorGrid();

init();

function clear() {
  first = "";
  second = "";
  current = "";
  updateDisplay("0");
}

function removeLastDigit() {
  if (current === "") {
    first = first.slice(0, -1);
    updateDisplay(first || "0");
  } else {
    second = second.slice(0, -1);
    updateDisplay(second || "0");
  }
}

function handleOperator(value) {
  if (current !== "" && second !== "") {
    evaluate();
  }

  current = value;
}
