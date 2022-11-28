function reverse(str) {
  let str_arr = str.split("");
  let reverse = "";
  //console.log(str_arr);
  for (let i = str_arr.length - 1; i >= 0; i--) {
    reverse = reverse.concat(str_arr[i]);
  }
  return reverse;
}

//console.log(reverse2("hello"));

// 2nd way

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverse3("there hello"));
