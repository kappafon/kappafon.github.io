
function chunkArrayInGroups(arr, size) {
  var tempArr=[];
  var finalArr=[];
  for(var counter=0; counter<arr.length; counter+=size) {
    tempArr=arr.slice(counter, counter+size);
    finalArr.push(tempArr);
  }
  return finalArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
