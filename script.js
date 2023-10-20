 // this function is for challenge 1

 function calculateFiverrFee(){
  var actualAmount = prompt("Enter Fiverr Order Amount.");
  var fiverrTax = (actualAmount * 20)/100;
  var yourAmount = actualAmount - fiverrTax;
  document.getElementById("showYourAmount").innerHTML = "You Will Get <strong class='text-danger'>"+yourAmount+"</strong> After Fiverr TAX"
}


// this Function is for Challenge 2

function convertAge(){
  var ageInYear = prompt("Enter Your Age in Years");
  var ageInMonth = ageInYear * 12;
  var ageInDays = ageInYear * 365;
  document.getElementById("showAgeInMonths").innerHTML = "Your Age in Months: <strong class='text-danger'>"+ageInMonth+"</strong>";
  document.getElementById("showAgeInDays").innerHTML = "Your Age in Days: <strong class='text-danger'>"+ageInDays+"</strong>";
}

// this Funciton is for Challenge 3
