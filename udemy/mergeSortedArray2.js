function mergeSortedArray2(arr1, arr2) {
  // if arr1 is empty
  if (arr1.length === 0) {
    return arr2;
  }
  // if arr1 is empty
  if (arr2.length === 0) {
    return arr1;
  }
  // Approach: created empty array mergedArray and push value either arr1 or arr2 step by step comparison and return mergedArray.
  const mergedArray = [];
  let i = 0;
  let j = 0;
  console.log(arr1, arr2);
  while (arr1[i] || arr2[j]) {
    if (!arr2[j] || arr1[i] < arr2[j]) {
      console.log("i:", i, arr1[i], " less than j:", j, arr2[j]);
      mergedArray.push(arr1[i]);
      i++;
      console.log(mergedArray);
    } else {
      console.log("i:", i, arr1[i], " greater than or equal to j:", j, arr2[j]);
      mergedArray.push(arr2[j]);
      j++;
      console.log(mergedArray);
    }
  }
  return mergedArray;
}

//console.log(mergeSortedArray2([2, 10, 25], [5, 20, 28]));
console.log(mergeSortedArray2([0, 3, 4, 31], [4, 6, 30]));
//mergeSortedArray2([2, 10, 25], [5, 20, 28]);
