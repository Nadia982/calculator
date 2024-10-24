const calculation = document.getElementById("calculation");
const result = document.getElementById("result");

function appendToDisplay(input) {
  calculation.innerText += input;
}

function clearDisplay() {
  calculation.innerText = "";
  result.innerText = "";
}

function toggleSign(){
        let answer = eval(result.innerText * -1);
        result.innerText = answer;
}

function backspace(){
    calculation.innerText = calculation.innerText.slice(0, -1);
    result.innerText = calculation.innerText;
}

function calculate() {
  try {
    let answer = eval(calculation.innerText);
    result.innerText = parseFloat(answer.toFixed(10));
  } catch (error) {
    result.innerText = "Error";
  }
}

