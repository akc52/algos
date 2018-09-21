function findLongestWordLength(str) {
  var tempArr = str.split(" ");
  var longestWordLength = 0;

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i].length > longestWordLength) longestWordLength = tempArr[i].length;
  }
  return longestWordLength;
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");
