// this function is for challenge 1

function calculateFiverrFee() {
  var actualAmount = prompt("Enter Fiverr Order Amount.");
  var fiverrTax = (actualAmount * 20) / 100;
  var yourAmount = actualAmount - fiverrTax;
  document.getElementById("showYourAmount").innerHTML =
    "You Will Get <strong class='text-danger'>" +
    yourAmount +
    "</strong> After Fiverr TAX";
}

// this Function is for Challenge 2

function convertAge() {
  var ageInYear = prompt("Enter Your Age in Years");
  var ageInMonth = ageInYear * 12;
  var ageInDays = ageInYear * 365;
  document.getElementById("showAgeInMonths").innerHTML =
    "Your Age in Months: <strong class='text-danger'>" +
    ageInMonth +
    "</strong>";
  document.getElementById("showAgeInDays").innerHTML =
    "Your Age in Days: <strong class='text-danger'>" + ageInDays + "</strong>";
}

// this Funciton is for Challenge 3
function checkNumber() {
  var randomNumber = prompt("Enter Any Number..");

  if (randomNumber % 2 == 0) {
    document.getElementById("showNumber").innerHTML =
      "The Number is: <strong class='text-danger'>Even</strong>";
  } else {
    document.getElementById("showNumber").innerHTML =
      "The Number is: <strong class='text-danger'>Odd</strong>";
  }
}

//this function is for challenge 4

function findLargest() {
  var num1 = prompt("Enter 1st Number..");
  var num2 = prompt("Enter 2nd Number..");
  
  if (num1 > num2) {
    document.getElementById("showLargrestNumber").innerHTML =
    "<strong class='text-danger'>"+ num1 +"</strong> is Greater";
  } else if (num2 > num1) {
    document.getElementById("showLargrestNumber").innerHTML =
    "<strong class='text-danger'>"+ num2 +"</strong> is Greater";
  } else {
    document.getElementById("showLargrestNumber").innerHTML =
    "<strong class='text-danger'>"+ num1 +" And "+num2 +"</strong> are Equals";
  }
}
