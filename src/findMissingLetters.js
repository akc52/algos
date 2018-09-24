function fearNotLetter(str) {

  let previousCharCode = str.charCodeAt(0) - 1;

  for(var i = 0; i < str.length; i++) {
    if(previousCharCode + 1 != str.charCodeAt(i)) {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    } else {
      previousCharCode = str.charCodeAt(i);
    }
  }
  return undefined
}

/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

*/
