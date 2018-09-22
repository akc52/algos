function diffArray(arr1, arr2) {
  var newArr = [];

  if (arr1.length == 0) return arr2;
  if (arr2.length == 0) return arr1;

  arr1.forEach( (item) => {
    if( arr2.indexOf(item) == -1 ) newArr.push(item)
  });

  arr2.forEach( (item) => {
    if( arr1.indexOf(item) == -1 ) newArr.push(item)
  });

  return newArr;
}

/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/
