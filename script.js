console.clear();
const calculation = document.getElementById("calculation");
const result = document.getElementById("result");

function appendToDisplay(input) {
  let maxInputLength = 30;
  if (calculation.innerText.length < maxInputLength) {
    calculation.innerText += input;
  } else {
    result.style.fontSize = "32px";
    result.innerText = `Error: this calculator supports an input of up to ${maxInputLength} digits`;
  }
}

function clearDisplay() {
  calculation.innerText = "";
  result.innerText = "";
}

function backspace() {
  calculation.innerText = calculation.innerText.slice(0, -1);
  result.innerText = calculation.innerText;
}

function calculate() {
  result.style.fontSize = "56px";
  try {
    let answer = eval(calculation.innerText);
    if (answer < 100000000) {
      result.innerText = parseFloat(answer.toFixed(6));
    } else {
      result.style.fontSize = "28px";
      result.innerText =
        "This calculator only shows results up to 14 digits long";
    }
  } catch (error) {
    result.innerText = "Error";
  }
}

function numberToRomanNumerals() {
  calculate(); //calculate the answer for the result box in case it hasn't already been calculated.
  let num = result.innerText;
  if (num > 3999999) {
    result.style.fontSize = "32px";
    result.innerText =
      "Error: max value to convert to Roman numerals is 3,999,999";
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

    let romanNumeralOutput = "";
    for (const letter in romanNumerals) {
      const numberEquivalentToRomanNumeral = romanNumerals[letter];
      while (num >= numberEquivalentToRomanNumeral) {
        num -= numberEquivalentToRomanNumeral;
        romanNumeralOutput += letter;
      }
    }

    result.innerText = romanNumeralOutput;
  }
}

function convertNumberToWords() {
    calculate(); //calculates result if this hasn't already been done
    const num = result.innerText;
    const maxNumLimit = 1000000; 
    const minNumLimit = -maxNumLimit;
    result.style.fontSize = "32px";

    if (num > maxNumLimit) {
            result.innerText = "Error: max value to convert to words is 1,000,000"; 
      return;
    }
    if (num < minNumLimit) {
      result.innerText = "Error: min value to convert to words is -1,000,000";
      return;
    }

    result.innerText = numberToWords(num);
  }
  
  function numberToWords(num) {
    if (num == 0) {
      return "zero";
    } else if (num < 0) {
      const positiveNum = num.toString().slice(1);
      return "minus " + numberToWords(positiveNum);
    } else if (num.includes('.')) {
      const [integerPart, decimalPart] = num.split('.');
      return convertPositiveNumberToWords(parseInt(integerPart)) + " point " + convertDecimalPartToWords(decimalPart);
    } else {
      return convertPositiveNumberToWords(num);
    }
  }
  
  function convertDecimalPartToWords(decimalStr) {
    const digits = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine"
    };
    
    let decimalWords = "";
    for (let digit of decimalStr) {
      decimalWords += digits[digit] + " ";
    }
    return decimalWords.trim();
  }
  
  function convertPositiveNumberToWords(num) {
    const ones = {
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
    const teens = {
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
    const tens = {
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty",
      6: "sixty",
      7: "seventy",
      8: "eighty",
      9: "ninety",
    };
  
    let words = "";
  
    function handleOneToNinetyNine(num) {
      if (num > 0 && num < 10) {
        words += ones[num];
      } else if (num >= 10 && num < 20) {
        words += teens[num];
      } else if (num >= 20 && num < 100) {
        words += tens[Math.floor(num / 10)];
        if (num % 10 > 0) {
          words += " " + ones[num % 10];
        }
      }
      return words;
    }
  
    function handle100to999(num) {
      words += ones[Math.floor(num / 100)] + " hundred";
      if (num % 100 > 0) {
        words += " and ";
        handleOneToNinetyNine(num % 100);
      }
      return words;
    }
  
    function handle1000to999999(num) {
      const thousands = Math.floor(num / 1000);
      if (thousands < 100) {
        handleOneToNinetyNine(thousands);
      } else {
        handle100to999(thousands);
      }
      words += " thousand";
      if (num % 1000 > 0) {
        if (num % 1000 < 100) {
          words += " and ";
        } else {
          words += ", ";
        }
        handle100to999(num % 1000);
      }
      return words;
    }
  
    if (num < 100) {
      handleOneToNinetyNine(num);
    } else if (num >= 100 && num < 1000) {
      handle100to999(num);
    } else if (num >= 1000 && num < 1000000) {
      handle1000to999999(num);
    }
  
    return words;
  }
  