
function destroyer(arr) {
  var args=Array.prototype.slice.call(arguments, 1);
  for (var counterX=0; counterX<arr.length; counterX++) {
    for (var counterY=0; counterY<args.length; counterY++) {
      if (arr[counterX] === args[counterY]) {
      arr.splice(counterX--,1);
      }
    }
  }
return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
