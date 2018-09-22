function getIndexToIns(arr, num) {
  var index = 0;
  arr.forEach((item) => {
    if(item >= num) return index;
    index++;
  })
}

//getIndexToIns([40, 60], 50);
//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
