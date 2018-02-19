
function slasher(arr, howMany) {
  for(var counter=0; counter<howMany; counter++) {
    arr.shift();
  }
  return arr;
}

slasher([1, 2, 3], 2);
