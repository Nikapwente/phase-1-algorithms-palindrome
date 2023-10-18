function isPalindrome(word) {
  // Write your algorithm here

  const str = word; 
for (let i = 0, j=str.length-1; i < str.length; i++, j--) { 
    if (str[i] === str[j]) {
      return true 
    } else {return false} 
    
};
  
}

/* 
  Add your pseudocode here
  1. Iterate through the array with the for loop.
  2. Define two indexes, one zero, i and the other, string length j.
  3. Increment i and decrement j.
  4. If i === j, the str is a palindrome.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
