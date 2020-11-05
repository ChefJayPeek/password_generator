This website is a password generator written in Javascript.
The site will prompt a user for password length between 8 and 128 characters, and whether it should contain upper and lowercase, numbers and special characters, and then generate a password based on their selections.

Input validation is run on user input to ensure that the password length is within the bounds and is a number, as well as ensuring they pick at least one of the 4 types of characters to populate the password.

Note: this is not a true secure password generation as it uses Math.random and not secure crypto.