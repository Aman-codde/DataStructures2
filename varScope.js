(function (){
    var i=6;
    console.log(i);
    if("5" === "5") {
     i = 100;
     console.log(i);
    }
    console.log(i);
}) ();

//
const arr = ['a','b','c'];
arr.push("e"); // will work
//arr = ['p','q']; // error can't assign different value to same arr variable

const obj = {'name': 'Aman', 'city': 'fresno'};
obj.name = "Jiya"; // const has no c
console.log(obj);

console.log(j);// will return undefined and not throw any ERROR
// which means j is defined already due to HOISTING
var j = 12;
