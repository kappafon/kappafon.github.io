
function rot13(str) { // LBH QVQ VG!
  var newStr=[];
  var code=0;
  for(var counter=0; counter<str.length; counter++) {
    code=str.charCodeAt(counter);
    if(code>=65 && code<=90) {
      if(code>77) {code-=26;}
      code+=13;
    }
    newStr+=String.fromCharCode(code);
  }
  return newStr;
}


// Change the inputs below to test
rot13("SERR PBQR PNZC");
