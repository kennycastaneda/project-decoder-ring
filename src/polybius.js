// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [
    //set up columns of the array and make each column an array to act as rows
    "aflqv".split(""),
    "bgmrw".split(""),
    "chnsx".split(""),
    "d (i/j) o t y".split(" "), //add the special (i/j) value and put in spaces to help with splitting up
    "ekpuz".split(""),
  ];

  function polybius(input, encode = true) {
    if (encode) {
      //true if we're encoding the message
      let arrayInput = input.split(""); //change the input message as an array

      let message = arrayInput.map((letter) => {
        //go through each letter of the input
        letter = letter.toLowerCase(); //set as lowercase, could have done this earlier
        if (letter === "i" || letter === "j") letter = "(i/j)"; //if the letter is i or j, return the value (i/j)
        for (let i = 0; i < alphabet.length; i++) {
          //go through each column
          for (let j = 0; j < alphabet[i].length; j++) {
            //go through each row value in that column
            if (letter === alphabet[i][j]) return `${i + 1}${j + 1}`; //assign the letter with the alphabet value at column i and row j
          }
        }
        return " "; //if nothing found going through the for loops above, it's a space (we can only do this because we're assuming only alphabet letters and spaces are given)
      });
      return message.join(""); //return the message array as a string
    } else {
      //decoding the message here (encode is set to false)
      let decodeMessage = ""; //set up decoded message as a string
      let spaceCount = 0; //count spaces to test later for even number of numbers

      for (let i = 0; i < input.length; i += 2) {
        // go through the input message to decode
        if (input.substring(i, i + 1) === " ") {
          //find the space
          decodeMessage += " "; //add the space to the message
          spaceCount++; //add to number of spaces counted
          i++; //add 1 to i to move onto the next character of the string
        }
        decodeMessage +=
          alphabet[input.substring(i, i + 1) - 1][
            input.substring(i + 1, i + 2) - 1
          ]; //add the character of the alphabet that matches the column value and row value from the number pair
      }
      if ((input.length - spaceCount) % 2 !== 0) return false; //check if an even number of numbers are given (all pairs), except for spaces
      return decodeMessage; //return the string decoded message
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
