function titleCase(str) {
  var wordArr = [];
  
  str.toLowerCase().split(" ").forEach((word) => {
    wordArr.push(word.charAt(0).toUpperCase() + word.substr(1));
  });

  return wordArr.join(" ");
}

//titleCase("I'm a little tea pot");
//titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
