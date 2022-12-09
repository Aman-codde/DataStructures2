function firstRecurring(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.length == 0) {
      unique.push(arr[i]);
    } else {
      for (let j = 0; j < unique.length; j++) {
        if (arr[i] == unique[j]) {
          //console.log(unique);
          return arr[i];
        }
      }
      unique.push(arr[i]);
    }
  }
  //console.log(unique);
  return undefined;
}

console.log(firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4])); // should return 2
console.log(firstRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4])); // should return 1
console.log(firstRecurring([2, 3, 4, 5])); // should return undefined
