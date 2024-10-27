const calculation = document.getElementById("calculation");
const result = document.getElementById("result");

function appendToDisplay(input) {
  calculation.innerText += input;
}

function clearDisplay() {
  calculation.innerText = "";
  result.innerText = "";
}

function toggleSign() {
  let answer = eval(result.innerText * -1);
  result.innerText = answer;
}

function backspace() {
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

function numberToRomanNumerals() {

  calculate(); //calculate the answer for the result box in case it hasn't already been calculated.
  let num = result.innerText;
  if(num>3999999){
    result.innerText ="Error: limit for Roman numeral conversion is 3,999,999"
  } else {
  const romanNumerals = {
    M̅: 1000000,
    C̅M̅: 900000,
    D̄: 500000,
    C̅D̄: 400000,
    C̅: 100000,
    X̅C̅: 90000,
    L̅: 50000,
    X̅L̅: 40000,
    X̅: 10000,
    V̅: 5000,
    MV̅: 4000,
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
   L: 50,
   XL: 40, 
   X: 10,
   IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let output = "";
  for(const letter in romanNumerals){
    const numberEquivalentToRomanNumeral = romanNumerals[letter]; 
    while(num >= numberEquivalentToRomanNumeral){
      num -= numberEquivalentToRomanNumeral;
      output += letter;
    }
  }

result.innerText = output;
}}

function numberToWords() {
  calculate(); //calculate the answer for the result box in case it hasn't already been calculated.

  const ones = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  const tenToNineteen = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
  };

  const tensColumn = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  };

  const suffixes = {
    1: "",
    2: "thousand",
    3: "million",
    4: "billion",
    5: "trillion",
  };

  // Obtaining input to convert number to words
  const numText = "";
  const num = result.innerText;
  const finalNumText = convertNum(num);
  const limit = 1000000000000;
  result.innerText = finalNumText;

  function convertNum(num) {
    let numStr = num.toString().split(".");
    let wholeNum = numStr[0];
    let decimalNum = numStr[1];
    let convertedWholeNum = "";
  }
}

//     if (number in underTwenty){
//         result.innerText = underTwenty[number];
//     }

//     const arrayOfDigits = result.innerText.split("")
//     if(arrayOfDigits.length ==2 && number > 19 ){
// result.innerText = `${tensColumn[arrayOfDigits[0]]} ${underTwenty[arrayOfDigits[1]]}`
//     }
