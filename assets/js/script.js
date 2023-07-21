// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

/**
 * add event listener to generate password button
 * a series of prompts for password criteria
 * -set length
 *  -validate length
 * -include lowercase
 * -include uppercase
 * -include number
 * -include special character
 *  -validate character use needing at least one of each
 * generate password meeting criteria
 * show password 
 */


//variable definitions
var generateBtn = document.querySelector("#generate");
var lengthMin = 7
var lengthMax = 129
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var allChars = alphabet + alphaUpper + numeric + specialChar;
var password = ""

// initalize variable functions here
//functions
function generatePassword() {
    // prompt for length
    var lengthChoice = window.prompt("Choose a password length between 8 and 128.")
    //validate password length
    if (lengthChoice < lengthMin) {
        alert("Invalid password length! Please restart!")
        return
    } else if
        (lengthChoice > lengthMax) {
        alert("Invalid password length! Please restart!")
        return
    }

    //prompt for lowercase
    var lowCharChoice = window.confirm("Would you like to use lower case letters?")

    //prompt for uppercase
    var upCharChoice = window.confirm("Would you like to use upper case letters?")

    //prompt for numbers
    var numChoice = window.confirm("Would you like to use numbers?")

    //prompt for special characters
    var spCharPrompt = window.confirm("Would you like to use special characters?")
    //validate lowercase
    //validate uppercase
    //validate numbers
    //validate special characters
    if (spCharPrompt === false && numChoice === false && upCharChoice === false && lowCharChoice === false) {
        alert("Password must contain at least 1 character type!")
        return
    }
    var finalPrompt = window.confirm("Generate new password?")

    //generate password
    while (lengthChoice > password.length) {
        if (lowCharChoice === true) {
            password += alphabet[Math.floor(Math.random() * alphabet.length)]
        }
        if (upCharChoice === true) {
            password += alphaUpper[Math.floor(Math.random() * alphaUpper.length)]
        }
        if (numChoice === true) {
            password += numeric[Math.floor(Math.random() * numeric.length)]
        }
        if (spCharPrompt === true) {
            password += specialChar[Math.floor(Math.random() * specialChar.length)]
        }
    }
    console.log(password)
    return password
}

//show password

function writePassword() {
    // call initalize variables
    password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//special functions like "eventlisteners"
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);