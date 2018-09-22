function frankenSplice(arr1, arr2, n) {
  const returnArr = arr2.slice();
  returnArr.splice(n, 0, ...arr1);

  return returnArr;
}
//frankenSplice([1, 2, 3], [4, 5], 1);

/*

You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.

*/
