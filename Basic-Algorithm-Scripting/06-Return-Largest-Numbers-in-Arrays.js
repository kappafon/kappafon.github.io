
function largestOfFour(arr) {
  var newArr=[];
  for(var counterOut=0; counterOut<arr.length; counterOut++) {
    var maxIn=arr[counterOut][0];
    for(var counterIn=0; counterIn<arr[counterOut].length; counterIn++) {
      if(arr[counterOut][counterIn]>maxIn) {
        maxIn=arr[counterOut][counterIn];
      }
    }
    newArr.push(maxIn);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
