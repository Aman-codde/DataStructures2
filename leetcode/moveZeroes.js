var moveZeroes = function (nums) {
  if (nums.length === 1) {
    return nums;
  }
  let count = 1;
  let i = 0;
  while (count !== nums.length) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
    } else i++;
    count++;
  }
  return nums;
};

console.log(moveZeroes([0, 0, 1]));
