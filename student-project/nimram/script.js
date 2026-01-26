const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
function removeval() {
  let value = display.value;
value.addEventListener("")
  display.value = value.slice(0, -1);
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.innerText;
    if (value === "C") {
      clearDisplay();
    } else if (value === "=") {
      calculate();
    }
    else if (value === "<=") {
    removeval();
    }
    else {
      appendToDisplay(String(value));
    }
  });
});

function appendToDisplay(number) {
  display.value += number;
  document.getElementById("display").number += number;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}
