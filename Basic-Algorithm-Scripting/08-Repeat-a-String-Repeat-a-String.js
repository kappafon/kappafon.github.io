
function repeatStringNumTimes(str, num) {
  if(num<0) {str=""; return str;}
  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);
