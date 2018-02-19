
function titleCase(str) {
  str=str.toLowerCase().split(" ");
  var newStr=[];
  for(var counter=0; counter<str.length; counter++) {
    var partStr=str[counter].split("");
    partStr[0]=partStr[0].toUpperCase();
    partStr=partStr.join("");
    newStr.push(partStr);
  }
  return newStr.join(" ");
}

titleCase("I'm a little tea pot");
