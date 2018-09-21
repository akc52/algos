function truncateString(str, num) {
  if(str.length > num) {
    str = str.substr(0, num).concat('...');
  }
  console.log(str);
  return str;
}

//truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);