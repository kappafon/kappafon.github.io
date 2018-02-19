
function getIndexToIns(arr, num) {
  arr.sort(function(a,b) {return a-b;});
    var index=0;
    while(arr[index]<num){
      index++;
    }
  return index;
}

getIndexToIns([40, 60], 50);
