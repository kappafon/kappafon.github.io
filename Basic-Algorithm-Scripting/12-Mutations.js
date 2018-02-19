
function mutation(arr) {
   arr=arr.join(" ").toLowerCase().split(" ");
  for(var counter=0; counter<arr[1].length; counter++) {
    if(arr[0].indexOf(arr[1][counter])==-1){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
