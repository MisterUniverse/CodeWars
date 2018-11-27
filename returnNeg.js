function makeNegative(num) {
  if(num > 0) {
    return (num - num) - num;
  }
  else {
    return num;
  }
}

// Refactored
function makeNegative(num) {
  return -Math.abs(num);
}
// Or
function makeNegative(num) {
  num > 0 ? -num : num;
}
