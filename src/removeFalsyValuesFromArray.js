function bouncer(arr) {
  var returnArr = [];

  arr.forEach((item) => {
    if(item) returnArr.push(item)
  })
  return returnArr;
}

// bouncer([7, "ate", "", false, 9]);
