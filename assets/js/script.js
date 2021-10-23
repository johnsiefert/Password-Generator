// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {

//list of arrays upper/lower cases, numbers and characters

let uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

//empty array
 
let resultArray = [];
let userArray = [];

uppercaseArray [1]
//props before getting a password of the follow questions
  let numCharacter = prompt ("How much number of Character you want between 8 and 128?");
  let numbers = confirm ("You want numbers in your password?");
  let uppercases = confirm ("You want Uppercases in your password?");
  let lowercases = confirm ("You want lowercases in your password?");
  let characters = confirm ("You want special characters in your password?");

// sequence of "if" statements for generating a password.

if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)

//for loop
for (let i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  let  password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
 }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
