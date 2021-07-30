//PREWRITTEN CODE -------------------
// Assign button to query selector
var generateBtn = document.querySelector("#generate");
//PREWRITTEN CODE -------------------

//Create arrays for specialChars, lowerCase, upperCase
var specialChars = "!#$%&()*+,-./:;<=?@[]^_{|}~".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberChars = "0123456789".split("");
var userChoiceArray;

var passwordCharCount;
var booSpecial;
var booLower;
var booUpper;

// Write password to the #password input
function writePassword(event) {
  event.preventDefault(); //make sure that the page does not refresh when button is clicked
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  passwordCharCount = getLength();
  booSpecial = getSpecial();
  booLower = getLower();
  booUpper = getUpper();

  var result = mainCreateFunction();

  return result;
}

//DECLARE FUNCTION TO GET LENGTH OF PASSWORD. IF/ELSE STATEMENT TO MAKE SURE LENGTH MEETS REQUIREMENTS
function getLength() {
  var validLength = false;

  do {
    var numberChars = prompt(
      "Please provide the number of characters in your password (must be between 8 and 128 characters)."
    );
    if (numberChars > 128 || numberChars < 8) {
      alert("NOT A VALID LENGTH");
      validLength = false;
    } else {
      validLength = true;
    }
  } while (!validLength);

  return numberChars;
}

function getSpecial() {
  var specialSelection = confirm(
    "Do you want SPECIAL CHARACTERS in your password?"
  );
  return specialSelection;
}

function getLower() {
  var lowerSelection = confirm(
    "Do you want LOWER-CASE LETTERS in your password?"
  );
  return lowerSelection;
}

function getUpper() {
  var upperSelection = confirm(
    "Do you want UPPER-CASE LETTERS in your password?"
  );
  return upperSelection;
}

function mainCreateFunction() {
  //--- USER SELECTED YES OR NO TO ALL 3 ---

  //IF USER SELECTED NO FOR ALL QUESTIONS
  if (!booSpecial && !booLower && !booUpper) {
    userChoiceArray = numberChars;
  }

  //IF USER SELECTED YES FOR ALL QUESTIONS
  if (booSpecial && booLower && booUpper) {
    userChoiceArray = numberChars.concat(specialChars, lowerCase, upperCase);
  }

  //--- USER SELECTED NO TO 1 ONLY ---

  //IF USER SELECTED NO TO SPECIAL ONLY
  if (!booSpecial && booLower && booUpper) {
    userChoiceArray = numberChars.concat(lowerCase, upperCase);
  }

  // IF USER SELECTED NO TO LOWER ONLY
  if (booSpecial && !booLower && booUpper) {
    userChoiceArray = numberChars.concat(specialChars, upperCase);
  }

  // IF USER SELECTED NO TO UPPER ONLY
  if (booSpecial && booLower && !booUpper) {
    userChoiceArray = numberChars.concat(specialChars, lowerCase);
  }

  //--- USER SELECTED YES TO 1 ONLY --
  if (!booSpecial && !booLower && booUpper) {
    userChoiceArray = numberChars.concat(upperCase);
  }

  if (!booSpecial && booLower && !booUpper) {
    userChoiceArray = numberChars.concat(lowerCase);
  }

  if (booSpecial && !booLower && !booUpper) {
    userChoiceArray = numberChars.concat(specialChars);
  }
  //DECLARE LOCAL VARIABLE PASSWORD
  var passwordGen = "";
  for (var i = 0; i < passwordCharCount; i++) {
    var randomChar = Math.floor(Math.random() * userChoiceArray.length);
    passwordGen += userChoiceArray[randomChar];
    console.log(passwordGen);
  }
  return passwordGen;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
