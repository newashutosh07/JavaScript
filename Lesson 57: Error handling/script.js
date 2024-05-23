// Error = An Object that is created to represent a problem that occurs
// Occur often with user input or establishing a connection

// try {} = Enclose code that might potentially cause an error
// catch {} = Catch and handle any thrown Errors from try {}
// finally {} = (optional) Always executes. Used mostly for clean up
// ex. close files, close connection, release resources

// Network errors
// promise rejection
// security errors

// try {
//   console.log(x);
//   //   console.log("Hello");
// } catch (error) {
//   console.error(error);
// } finally {
//   // Used for:
//   // Close files
//   // Close connections
//   // release resources
//   console.log("This always executes");
// }
// console.log("You have reached the end!");

try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));

  if (divisor == 0) {
    throw new Error("You can't divide by Zero");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Value must be a number");
  }

  const result = dividend / divisor;

  console.log(result);
} catch (error) {
  console.error(error);
}

console.log("You have reached the end");
