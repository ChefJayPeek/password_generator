

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variables for user input
var passwordLength;
var lowerYes;
var upperYes;
var charYes;
var numYes;

// Variables for password generation
// Lowercase alphabet
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Space to signify uppercase
space = [];

// Numbers
num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Special char
char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Variable for choices of upper, lower, numeric and special
var choice;

// Function to convert to uppercae and return the uppercase letter
var toUpper = function(x) {
    return x.toUpperCase();
};

// Variable to hold Uppercase version
upper = lower.map(toUpper);

// Generate password function
function generatePassword() {
    // Get password length from user
    passwordLength = parseInt(prompt("Enter the number of characters for the password, between 8 and 128:"));
    // Validate there is some input
    if (!passwordLength) {
        alert("You must enter a number!");
        // Validate input between 8 and 128 
    } else if (passwordLength < 8 || passwordLength > 128){
        passwordLength = parseInt(prompt("You must enter a number between 8 and 128!"));
    } else {
        // Get user choices for types of characters in the password
        lowerYes = confirm("Password will contain Lowercase?");
        upperYes = confirm("Password will contain Uppercase?");
        charYes = confirm("Password will contain Special Characters?");
        numYes = confirm("Password will contain Numbers?");
    };

    // Validate there is a at least one choice
    if (!lowerYes && !upperYes && !charYes && !numYes) {
        choice = alert("You have to pick something!")
    }

    // All possible character types
    else if (lowerYes && upperYes && numYes && charYes) {
        choice = char.concat(lower, upper, num);
    }

    // 3 character types
    else if (charYes && numYes && upperYes) {
        choice = char.concat(num, upper);
    }
    else if (charYes && numYes && lowerYes) {
        choice = char.concat(num, lower);
    }
    else if (charYes && lowerYes && upperYes) {
        choice = char.concat(lower, upper);
    }
    else if (lowerYes && upperYes && numYes) {
        choice = lower.concat(upper, num);
    }

    // 2 character types
    else if (charYes && lowerYes) {
        choice = char.concat(lower);
    }
    else if (charYes && upperYes) {
        choice = char.concat(upper);
    }
    else if (charYes && numYes) {
        choice = char.concat(num);
    }
    else if (lowerYes && upperYes) {
        choice = lower.concat(upper);
    }
    else if (lowerYes && numYes) {
        choice = lower.concat(num);
    }
    else if (upperYes && numYes) {
        choice = upper.concat(num);
    }

    //1 character type
    else if (lowerYes) {
        choice = lower;
    }
    else if (upperYes) {
        choice = upper;
    }
    else if (numYes) {
        choice = num;
    }
    else if (charYes) {
        choice = char;
    }
    
    // Password variable array to store password
    var passwordArr =[];

    // Generate random characters
    for (var i =0; i < passwordLength; i++) {
        var pickChars = choice[Math.floor(Math.random() * choice.length)];
        passwordArr.push(pickChars);
    }

    // Convert array into a string
    var password = passwordArr.join("");
    
    // Return the resulting string to the webpage
    return password;
};


