// This is a javascript file
// The program will ask for the user to enter text they'd like to ecript
// The program will the output their text swapping their each letter with the letter 15 spaces ahead of the orginal


let user_str = prompt(`Please enter text you'd like to encript`); //prompts user to enter what they'd like to encript

let Cypher = function (str, number) {
  // Create a funcition. This function is going to be able to wrap around the alphabet hence  +26
  if (number < 0) {
    return Cypher(str, number + 26);
  }

  // Create a variable with an empty string to be filled in later on
  let secretCode = "";

  // Loop through oringinal text
  for (i = 0; i < str.length; i++) {
    // Create a new variable with the orginal set of characters
    let set = str[i];

    // To find if the characters we use match(/[a-z]) to find all the letters and not spaces or symbols be have to match them, we also want to be case insensitive so flag with /i. 
    if (set.match(/[a-z]/i)) {
      // Create a new variable with the letters and change them to their ACSII code
      let asciiSwap = str.charCodeAt(i);

      // If the characters are Upper Case anywhere between 65-90 on the ACSII table
      if (asciiSwap >= 65 && asciiSwap <= 90) {
        set = String.fromCharCode(((asciiSwap - 65 + number) % 26) + 65); //Turn them back into letters using fromCharCode. We need to do the math to also move them 15 positions. 
      }

      // If the characters are Upper case anywhere between 97-122 on the ACSII table 
      else if (asciiSwap >= 97 && asciiSwap <= 122) {
        set = String.fromCharCode(((asciiSwap - 97 + number) % 26) + 97); // Turn the code back into letters using from CharCode. Do the math + 15 to their new position
      }
    }

    // Append
    secretCode += set; //the new set is equal to the empty string
  }

  // All done!
  return secretCode; //return the new string as the output of the function
};
console.log(Cypher(user_str, 15)) 