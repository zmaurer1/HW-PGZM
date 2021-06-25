// Assignment Code
var upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
console.log(upperCase);
var lowerCase = `abcdefghijklmnopqrstuvwxyz`;
console.log(lowerCase);
var specChar = `!@#$%^&*?`;
console.log(specChar);
var numbers = `0123456789`;
console.log(numbers);

var generateBtn = document.querySelector("#generate");
function generatePassword() {
  console.log("final");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var promptOneAnswer = prompt("Would you like to use number characters? Enter Y or N");
  var promptTwoAnswer = prompt("Would you like to use special characters? Enter Y or N");
  passwordText.value = prompt("Would you like to use number characters? Enter Y or N");
  var passwordLength = prompt("How many characters would you like your password to be?");
  
  console.log(promptOneAnswer);
  console.log(promptTwoAnswer);
  console.log(passwordLength);
}

for (var i = 0; i<passwordLength; i++) {

var userChoice = Math.floor(Math.random[])*4);

if (userChoice ==0) {
    
}
    
    

}



if (promptOneAnswer===N) {


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
