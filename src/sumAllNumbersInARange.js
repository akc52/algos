function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var sum = 0;

  for(var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

/*
Pass array of 2 numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/
