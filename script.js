
arraysObject = {
  // Array of special characters to be included in password
  specialCharacters: [
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
  ],
  // Array of numeric characters to be included in password
  numericCharacters: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],

  // Array of lowercase characters to be included in password
  lowerCasedCharacters: [
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
  ],

  // Array of uppercase characters to be included in password
  upperCasedCharacters: [
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
  ],
};



// Function to prompt user for password options
//Checking if the user is entering the right number or not.
function getPasswordOptions(options) {
    while(true) {
      var passwordLength = prompt("Enter a number for the length of the password: (at least 10 characters but no more than 64");


      if (passwordLength === null) {
        return false;
      }
      passwordLength = parseInt(passwordLength);
      if (passwordLength >= 10 && passwordLength <= 64) {
        return true;
      }
    }
   alert("Password must be between 10 and 64 characters long. Please try again")
}

// 

// Function for getting a random element from an array
function getRandom(arr) {


   

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return passwordLength;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
