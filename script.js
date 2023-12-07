function indexOfIgnoreCase(s1, s2) {
  // write your code here
	 // Handle edge cases
  if (str.length === 0 || subStr.length === 0) {
    return -1;
  }

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Find the index of the first occurrence of subStr in str
  const index = lowerStr.indexOf(lowerSubStr);

  return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
