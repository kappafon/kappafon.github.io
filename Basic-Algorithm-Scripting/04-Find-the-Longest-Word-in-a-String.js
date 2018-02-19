
function findLongestWord(str) {
  str=str.split(" ");
  var longest=str[0].length;
  for(var counter=0; counter<str.length; counter++) {
    if (str[counter].length>longest) {
      longest=str[counter].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
