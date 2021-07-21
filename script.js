var generateBtn = document.querySelector("#generate");
var length;
var lowercase;
var uppercase;
var special;
var numeric;
var characters = "";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";


function getLength() {
  length = prompt("Password length");
  if(length < 8) {
    getLength()
  }
  return length;
}

function generatePassword() {
  getLength()
  if(prompt("Use uppercase characters? (y/n)") === "y") {
    characters += uppercaseLetters;
    console.log(characters)
  }
  if(prompt("Use lowercase characters? (y/n)") === "y") {
    characters += lowercaseLetters;
    console.log(characters)
  }
  if(prompt("Use numbers? (y/n)") === "y") {
    characters += numbers;
    console.log(characters)
  }
  if(prompt("Use special characters? (y/n)") === "y") {
    characters += symbols;
    console.log(characters)
  }
  var password = "";
  for(x = 0; x < length; x++) {
    console.log(x)
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    console.log(password)
  }
  return password
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);