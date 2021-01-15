// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz ".split("");

  function caesar(input, shift, encode = true) {
    if (!input || !shift || shift < -25 || shift > 25) return false; //if input or shift are missing, or shift is too long/short, return false

    input = input.toLowerCase().split(""); //bring the input message to lowercase and form into an array

    if (!encode) shift *= -1; //if encode is false, where going to reverse negative/positive value of shift value

    let shiftOfIndex = input.map((letter) => {
      //go through each letter of the input
      let shiftIndex = alphabet.indexOf(letter); //find the index where the letter is in the alphabet array

      if (shiftIndex === 26) return alphabet[shiftIndex]; //this is a space

      if (shiftIndex === -1) return letter; //this is a character not in the alphabet or a space

      if (shiftIndex + shift > 25) {
        //if shift plus the index is greater than 25, we want to loop back around the alphabet
        shiftIndex += shift - 26;
        return alphabet[shiftIndex];
      }

      if (shiftIndex + shift < 0) {
        //if shift plus the index is less than 0, we want to loop back around the alphabet
        shiftIndex += shift + 26;
        return alphabet[shiftIndex];
      } else {
        shiftIndex += shift; //change the index to move with the shift value
        return alphabet[shiftIndex]; //return the value of the alphabet at the new shifted index
      }
    });

    let message = shiftOfIndex.join(""); //jion the array as a string

    return message; //return the message
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
