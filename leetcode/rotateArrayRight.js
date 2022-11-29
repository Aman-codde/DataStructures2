// k is number of times/steps
function rotateRight(arr, k) {
  let new_arr = arr.slice(-k);
  new_arr.push(arr.slice(0, -k));
  nums = new_arr.flat();
  return nums;
}
var rotate = function (nums, k) {
  let new_arr = nums.slice(-k);
  new_arr.push(nums.slice(0, -k));
  nums = new_arr.flat();
  return nums;
};
console.log(rotate([2, 4, 12, 34, 56], 3));
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
