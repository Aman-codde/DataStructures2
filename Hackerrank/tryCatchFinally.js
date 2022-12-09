// function reverseString(s) {
//   try {
//     const reverse = s.split("").reverse().join("");
//     console.log(reverse);
//   } catch (err) {
//     console.log(err.message);
//     console.log(s);
//   }
// }

// reverseString(Number(1234));

function isPositive(a) {
  if (a == 0) throw "Zero Error";
  if (a > 0) return "YES";
  if (a < 0) throw "Negative Error";
}

console.log(isPositive(-10));

function getCount(objects){

}

getCount([{12:34},{3:9}]);
