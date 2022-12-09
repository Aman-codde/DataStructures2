// function repeatedString(str, n) {
//   const len = str.length;
//   let new_str = "" + str;
//   let times;
//   let substr_count = "";
//   let regex = /a/g;
//   let count_a = (str.match(regex) || []).length;
//   console.log("count: ", count_a);
//   if ((n - len) % len !== 0) {
//     substr_count = (n - len) % len;
//     times = Math.floor((n - len) / len);
//     count_a *= times + 1;
//     console.log(times);
//     new_str = new_str.repeat(times + 1);
//     let subString = str.substr(0, substr_count);
//     new_str = new_str.concat(subString);
//     count_a += (subString.match(regex) || []).length;
//   } else {
//     times = (n - len) / len;
//     console.log(times);
//     new_str = new_str.repeat(times + 1);
//     count_a *= times + 1;
//   }
//   console.log(new_str, count_a);
//   return new_str, count_a;
// }
function repeatedString(s, n) {
  const len = s.length;
  let regex = /a/g;
  if (n <= len) {
    let sub = s.substr(0, n);
    return (sub.match(regex) || []).length;
  }
  // Write your code here
  let new_str = "" + s;
  let times;
  let substr_count = "";
  let count_a = (s.match(regex) || []).length;
  //console.log("count: ", count_a);
  if ((n - len) % len !== 0) {
    substr_count = (n - len) % len;
    times = Math.floor((n - len) / len);
    count_a *= times + 1;
    //console.log(times);
    //console.log("Invalid:", times);
    //new_str = s.repeat(times + 1);
    let subString = s.substr(0, substr_count);
    //new_str = new_str.concat(subString);
    count_a += (subString.match(regex) || []).length;
  } else {
    times = (n - len) / len;
    console.log(times);
    //new_str = s.repeat(times + 1);
    count_a *= times + 1;
  }
  //console.log(new_str, count_a);
  return count_a;
}

// console.log(repeatedString("abad", 7));
console.log(repeatedString("ababa", 3));
//console.log(repeatedString("abad", 9));
//console.log(repeatedString("a", 1000000000000));
