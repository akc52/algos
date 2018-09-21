function factorialize(num) {
  var increment = 1;
  var factorial = 1;

  while(increment <= num) {
    factorial  *= increment;
    increment++;
  }
  return factorial;
}

//factorialize(34)
