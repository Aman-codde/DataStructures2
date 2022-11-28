function mergeSortedArrays(arr1, arr2) {
  // if arr1 is empty
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  // if arr2 is empty

  // Approach: Append First array(arr1) using Splice() by adding each element of second array step by step and return merged sorted array (arr1)
  for (let i = arr1.length - 1; i >= 0; i--) {
    let j = arr2.length - 1;
    if (arr1[i] <= arr2[j]) {
      arr1.splice(i + 1, 0, arr2[j]);
      arr2.length--;
    }
    if (arr1[i] > arr2[j]) {
      if (arr1[i - 1] < arr2[j]) {
        arr1.splice(i, 0, arr2[j]);
        arr2.length--;
      }
    }
  }
  return arr1;
}

console.log(mergeSortedArrays([2, 10, 25], [5, 20, 28]));
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
