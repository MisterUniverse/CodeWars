function filter_list(l) {
 const nums = [];
 for(let i = 0; i < l.length; i++) {
   if (typeof l[i] === 'number') {
     nums.push(l[i]);
   }
 }
 return nums;
}

filter_list([1, 2. a, b, 3, 4, c])

// Refactored
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}
