// RANDOM PASSWORD GENERATOR

function generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "01234567789";
  const symbolChars = "!@#$%^&*()_+=";

  let allowedChars = "";
  let password = "";
  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (passwordLength <= 0) {
    return `(password length must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    //This will be only possible if all the includes are set to be false
    return `(Atleast 1 set of character needs to be selected)`;
  }
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = false;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated Password: ${password}`);
