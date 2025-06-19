/* Q4: The Password Validator:
  You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
 */

function isValidPassword(password){
  // Check if password is at least 8 characters long
  const isLongEnough = password.length >= 8;
  // Check if password contains at least one uppercase letter
  const hasUpperCase = /[A-Z]/.test(password);
  // Check if password contains at least one lowercase letter
  const hasLowerCase = /[a-z]/.test(password);
  // Check if password contains at least one digit
  const hasDigit = /[0-9]/.test(password);

  // Validate all conditions
  if(isLongEnough && hasUpperCase && hasLowerCase && hasDigit){
   console.log('Password is Valid');
  }
  else{
   console.log('Password is Invalid');
  }
}

// Test cases
isValidPassword("Prabhat123");
isValidPassword("prabhat123");
isValidPassword("Prabhat");
isValidPassword("prabhat");
isValidPassword("44Prabhat");
