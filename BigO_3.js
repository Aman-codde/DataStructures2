// O(n²)
// log all pairs of array
const boxes = [1,2,3,4,5]

function logAllPairsOfArray(boxes) {
    let pairs = [];
    let pair = [];
    for(let i=0; i<boxes.length; i++) {
        for(let j=0; j<boxes.length; j++) {
            pair = [boxes[i],boxes[j]];
            pairs.push(pair);
        }
    }
    console.log(pairs);
}

logAllPairsOfArray(boxes);