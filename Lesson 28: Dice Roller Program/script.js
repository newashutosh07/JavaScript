// DICE ROLLER PROGRAM

function rollDice() {
  // Get the number of dice from the input field
  const numOfDice = document.getElementById("numOfDice").value;
  // Get the element where dice result will be displayed
  const diceResult = document.getElementById("diceResult");
  // Get the element where dice images will be displayed
  const diceImages = document.getElementById("diceImages");
  // Arrays to store the values and image tags of the rolled dice
  const values = [];
  const images = [];
  // Loop to roll each dice and generate values and corresponding image tags
  for (let i = 0; i < numOfDice; i++) {
    // Generate a random value between 1 and 6 for each dice
    const value = Math.floor(Math.random() * 6) + 1;
    // Push the value to the values array
    values.push(value);
    // Create an image tag with the corresponding dice value and push it to the images array
    images.push(`<img src="Images/dice${value}.png" alt="Dice ${value}">`);
  }
  // Display the values of the rolled dice in the result element
  diceResult.textContent = `dice: ${values.join(", ")}`;
  // Display the images of the rolled dice in the images element
  diceImages.innerHTML = images.join("");
}

/*
1. Function Definition: The `rollDice()` function is defined. This function is responsible for rolling the dice and displaying the results.

2. Get Input: 
   - `numOfDice` variable is assigned the value entered in an input field with the id "numOfDice". This input field is presumably where the user specifies how many dice to roll.
   - `diceResult` and `diceImages` variables are assigned references to HTML elements where the results of the dice roll (textual and visual) will be displayed.

3. Initialization**:
   - Two empty arrays `values` and `images` are initialized. These arrays will store the values of the rolled dice and the corresponding HTML image tags for displaying the dice faces, respectively.

4. Rolling the Dice:
   - A `for` loop is used to iterate `numOfDice` times, rolling each dice.
   - Inside the loop, a random number between 1 and 6 (inclusive) is generated using `Math.random() * 6 + 1`. This simulates rolling a six-sided die.
   - The rolled value is stored in the `values` array, and an image tag corresponding to the rolled value is constructed and stored in the `images` array.

5. Displaying Results:
   - After all dice are rolled, the `values` array is joined into a comma-separated string and displayed as text content in the `diceResult` element.
   - Similarly, the `images` array is joined into a single string containing HTML image tags, which are then set as the HTML content of the `diceImages` element. This effectively displays the dice faces.

In summary, this code takes input from the user specifying the number of dice to roll, rolls that many dice, displays the textual results of the rolls, and also shows visual representations of the rolled dice faces.

*/
