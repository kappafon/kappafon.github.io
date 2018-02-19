
function confirmEnding(str, target) {
  return target===str.substr(-target.length);
}

confirmEnding("Bastian", "n");
