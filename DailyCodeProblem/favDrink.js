/*
Good morning! Here's your coding interview problem for today.
This problem was asked by Amazon.
At a popular bar, each customer has a set of favorite drinks, and will happily accept any drink among this set. For example, in the following situation, customer 0 will be satisfied with drinks 0, 1, 3, or
6 .
preferences = {
0: [0, 1, 3, 6],
1: [1, 4, 7],
2: [2, 4, 7, 5, 1],
3: [3, 2, 5, 1],
4: [5, 8]
}

{
  d0: [0]//customer
  d1: [0,1,2]
  d2: [2,3]
  d3: [3,0]
  d5: [2,3,4]
  d6: [0]
  d7: [2,1]
  d8: [4]
  max: [3,d1]
  customers: [0,1,2,3,4]
}
A lazy bartender working at this bar is trying to reduce his effort by limiting the drink recipes he must memorize. Given a dictionary input such as the one above, return the fewest number of drinks he must learn in order to satisfy all customers.
For the input above, the answer would be 2, as drinks 1 and 5 will satisfy everyone. */

function minDrinksToRemember(preferences) {
  // create object with drink number(as key) that maps to its occurences (as values)
  let countOccurences = {};
  for (let key in preferences) {
    for (let i = 0; i < preferences[key].length; i++) {
      //console.log(key);
      if (countOccurences[preferences[key][i]]) {
        countOccurences[preferences[key][i]].push(key);
      } else {
        countOccurences[preferences[key][i]] = [];
        countOccurences[preferences[key][i]].push(key);
      }
    }
  }
  console.log(countOccurences);
}

minDrinksToRemember({
  0: [0, 1, 3, 6],
  1: [1, 4, 7],
  2: [2, 4, 7, 5],
  3: [3, 2, 5],
  4: [5, 8],
});
