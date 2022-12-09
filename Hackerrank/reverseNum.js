function reverse(num) {
  let rev = 0;
  while (num !== 0) {
    let remainder = num % 10;
    rev = rev * 10 + remainder;
    num = Math.floor(num / 10);
  }
  console.log(rev);
}

reverse(132);
