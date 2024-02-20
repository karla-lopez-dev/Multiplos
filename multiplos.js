let number = document.querySelector("h3");
let plus = document.getElementById("btn-plus");
let minus = document.getElementById("btn-minus");
let text = document.querySelector("input");

let value = 1;
let sum = 0;

number.innerText = sum;

function textNumber(e) {
  value = Number(e.target.value);
}

function increase() {
  sum += value;
  number.innerText = sum;
}

function decrease() {
  sum -= value;
  number.innerText = sum;
}

text.addEventListener("input", textNumber);
plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);
