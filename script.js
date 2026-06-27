const calculator = document.querySelector(".calculator");
const number = document.querySelector(".number-container");

let value = 0;

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

genCalculatorGrid();
