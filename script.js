function firstNonRepeatedChar(str) {
 // Write your code here
	 let freq = {};

  // Count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find the first char with frequency = 1
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null; // if none found
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
