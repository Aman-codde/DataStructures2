function containsDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; i < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}
