// Array of special characters to be included in password
var passwordLength = 10;
var arrChoices = [];

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions(passwordLength) {
  //reset arrChoices everytime function is called
  // arrChoices = [];

  //prompt for password length
  passwordLength = parseInt(
    prompt(
      "How many characters would you like in your password? (10 - 64 characters)"
    )
  );
  //Handle what happens if they enter an incorrect number or something that is not a number
  if (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
    alert(
      "Length must be a number and also be between 10 and 64 digits long. Please try again"
    );
    return false;
  }

  //ask users yes or no if they want which type of character from each array
  if (confirm("Do you want lowercase characters in your password?")) {
    arrChoices = arrChoices.concat(lowerCasedCharacters);
  }

  if (confirm("Do you want uppercase characters in your password?")) {
    arrChoices = arrChoices.concat(upperCasedCharacters);
  }

  if (confirm("Do you want special characters in your password?")) {
    arrChoices = arrChoices.concat(specialCharacters);
  }

  if (confirm("Do you want numbers in your password?")) {
    arrChoices = arrChoices.concat(numericCharacters);
  }

  // return arrChoices;
}

// =========================================================

// Function for getting a random element from an array
function getRandom(arrChoices) {
  //getPasswordOptions needs to be in here somewhere.
  newPassword = "";
  for (var i = 0; i < arrChoices.length; i++) {
    
    // getPasswordOptions(i);
    var findRandomIndex = Math.floor(Math.random() * newPassword.length);
    newPassword += arrChoices[findRandomIndex];

  } 
    // return getRandom(newPassword);
    return newPassword;


}

// Function to generate password with user input
function generatePassword(newPassword, passwordLength) {

  getPasswordOptions();
  var newPassword = "";
  for (var i = 0; i < passwordLength; i++) {
   newPassword += getRandom();
    //return variable
  }
  return newPassword; 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


  // var newPassword = generatePassword();
  // return writePassword(newPassword);

  // passwordText.value = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
