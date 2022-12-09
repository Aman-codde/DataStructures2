function divisibleSumPairs(n, k, arr) {
  const ar = arr.split(" ");
  //const sortArr = ar.sort((a, b) => a - b);
  console.log(ar);
  let count = 0;
  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      //if (sortArr[i] < sortArr[j]) {
      console.log(ar[i], ar[j]);
      if ((ar[i] + ar[j]) % k == 0) count++;
      //}
    }
  }
  return count;
}

//console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
//console.log(divisibleSumPairs(2, 2, [8, 10]));
// console.log(
//   divisibleSumPairs(
//     100,
//     40,
//     "13 91 5 100 5 12 5 79 99 87 59 65 62 73 93 73 63 65 59 46 67 35 22 55 50 53 38 79 75 44 95 53 5 73 44 94 95 21 60 2 32 48 72 13 91 74 79 99 17 31 53 20 88 17 54 47 56 79 23 49 95 81 9 50 12 20 45 82 44 82 93 15 73 51 65 96 4 77 37 41 30 11 65 100 62 51 64 48 12 11 68 81 46 37 10 46 75 82 21 23"
//   )
// );

console.log(
  divisibleSumPairs(
    100,
    76,
    "78 93 28 4 96 99 85 30 25 30 53 81 90 63 58 99 69 20 53 33 46 31 18 58 38 29 43 30 89 57 98 11 39 38 35 23 88 64 100 44 44 23 95 21 7 96 27 79 41 40 36 49 95 44 8 44 30 34 61 34 20 92 5 24 42 49 54 89 39 64 44 4 45 74 81 20 24 97 100 84 43 88 20 83 65 64 80 16 92 56 75 13 15 68 91 4 89 85 25 97"
  )
);
