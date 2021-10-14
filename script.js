// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {

//list of arrays upper/lower cases, numbers and characters

let uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Write password to the #password input
function writePassword() {
  let  password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
 }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
