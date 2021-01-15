// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const oldAlphabet = "abcdefghijklmnopqrstuvwxyz".split(""); //set up standard alphabet

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || !input) return false;
    newAlphabet = alphabet.split(""); //place new alphabet characters in array
    if (newAlphabet.length !== 26) return false; //if the length is not equal to 26 return false

    uniqueTrueOrFalse = newAlphabet.map((character) => {
      //go through each character of the new alphabet to check for uniqueness
      return newAlphabet.indexOf(character) === //starts from beginning of array to find index of the character
        newAlphabet.lastIndexOf(character) //starts at end of array to find index of the character, a repeated character will have a different index than starting from the front
        ? true //it is a unique chatacter
        : false; //it repeats
    });
    if (uniqueTrueOrFalse.some((unique) => unique === false)) return false; //if any of the characters repeat return false

    input = input.toLowerCase().split(""); //put input into lowercase and set up as an array

    if (encode) {
      //if the encode is passed as true, encode the message
      let message = input.map((letter) => {
        //go through each letter of the input message
        let newIndex = oldAlphabet.indexOf(letter); //find where the index is in the array of the old alphabet

        if (newIndex === -1) return letter; //if the character doesn't match anything in the old alphabet, just return the letter (works great for space)

        return newAlphabet[newIndex]; //find the character that is in the same index in the new alphabet
      });
      return message.join(""); //return the array as a message as a string
    }

    if (!encode) {
      //if the encode is passed as false, decode the message
      let message = input.map((letter) => {
        //go through each letter of the encoded message
        let oldIndex = newAlphabet.indexOf(letter); //find the index the letter is in the new alphabet
        if (oldIndex === -1) return letter; //if nothing found, just return that letter, like space
        return oldAlphabet[oldIndex]; //return thecharacter that matched the index in the old alphabet
      });
      return message.join(""); //return the decoded message as a string
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
