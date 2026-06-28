const calculator = document.querySelector(".calculator");
const number = document.querySelector(".number-container");
const result = document.querySelector(".result");
const btnAC = document.querySelector("#ac");
const btnDel = document.querySelector("#del");

let value = "0";

const operators = ["+", "-", "*", "/"];

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
  result.innerText = value;
}

genCalculatorGrid();

init();

const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  return a / b;
};

let firstValue = "";
let secondValue = "";
let operatorValue = "";
let val = false; // Menandakan apakah input selanjutnya adalah angka baru

// --Ambil value dari button calculator--
number.addEventListener("click", (event) => {
  if (!event.target.classList.contains("btn")) return;
  const btnValue = event.target.innerText; // mengambil value dari button yang di click

  console.log(btnValue);

  //cek apakah yang di click operator atau bukan
  if (operators.includes(btnValue)) {
    handleOperator(btnValue);
  } else if (btnValue === "=") {
    handleCalculate();
  } else {
    handleNumber(btnValue);
  }
});

// --Fungsi Proses Logika

function handleNumber(num) {
  if (val) {
    value = num;
    val = false;
  } else {
    value = value === "0" ? num : value + num;
  }
  result.innerText = value;
}

function handleOperator(op) {
  firstValue = value;
  operatorValue = op;
  val = true; // Menandakan input selanjutnya adalah angka baru
}

const handleCalculate = () => {
  if (!operatorValue || !firstValue) return; //jika belum ada angka atau operator yang di input maka akan di kembalikan kosong

  secondValue = value;
  const a = parseFloat(firstValue);
  const b = parseFloat(secondValue);

  let x = 0;

  switch (operatorValue) {
    case "+":
      x = add(a, b);
      break;
    case "-":
      x = sub(a, b);
      break;
    case "*":
      x = mul(a, b);
      break;
    case "/":
      x = b === 0 ? "Error" : div(a, b);
      break;
    default:
      break;
  }

  value = x.toString();
  result.innerText = value;

  // Reset setelah selesai
  firstValue = "";
  secondValue = "";
  operatorValue = "";
  val = true;
};

btnAC.addEventListener("click", () => {
  value = "0";
  firstValue = "";
  secondValue = "";
  operatorValue = "";
  val = false;

  result.innerText = value;
});

btnDel.addEventListener("click", () => {
  if (value === "0" || value === "error") {
    value = "0"; // Jika teks di layar adalah "Error", langsung reset ke "0"
  } else if (value.length > 1) {
    value = value.slice(0, -1);
  } else {
    value = "0";
  }
  result.innerText = value;
});
