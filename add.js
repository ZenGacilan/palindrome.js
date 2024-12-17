// Get input strings using prompt()
const word1 = prompt("Enter the first word:");
const word2 = prompt("Enter the second word:");

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Reverse the input strings
const reversedWord1 = reverseString(word1);
const reversedWord2 = reverseString(word2);

// Log original and reversed strings
console.log("Original word 1:", word1);
console.log("Reversed word 1:", reversedWord1);
console.log("Original word 2:", word2);
console.log("Reversed word 2:", reversedWord2);

// Check if the original and reversed strings are equal (palindrome check)
console.log("Is word 1 a palindrome?", word1 === reversedWord1);
console.log("Is word 2 a palindrome?", word2 === reversedWord2);
