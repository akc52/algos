function largestOfFour(arr) {
  var arrLargest = [];
  for(var i=0; i < arr.length; i++) {
    //console.log(arr[i])
    var currentLargest = arr[i][0];
    for(var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > currentLargest) currentLargest = arr[i][j];
    }
  }
  return arrLargest;
}

//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);