
function factorialize(num) {

  var limit = num;
  if(num == 0) {
    return 1;
  }
  for(counter = 1; counter < limit; counter++) {

    num *= counter;

  }
  
  return num;

}



factorialize(5);

