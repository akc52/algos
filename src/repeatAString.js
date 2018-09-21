function repeatStringNumTimes(str, num) {
  var returnString = "";
  if(num > 0) returnString = str.concat(repeatStringNumTimes(str, num - 1));
  return returnString;
}

repeatStringNumTimes("abc", 3);