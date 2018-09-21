//not using ES2015 .endsWith()

function confirmEnding(str, target) {
  if( str.substr(-(target.length)) == target ) return true;
  return false;
}

//confirmEnding("Open sesame", "same");