// O(n) -- linear time
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10000).fill('nemo');
const larger = new Array(100000).fill('hello');

function findNemo(array) {
    //let t0 = performance.now();
    for(let i = 0; i<array.length; i++) {
        if(array[i] === 'nemo') {
            console.log("Found NEMO!");
        }
    }
    // let t1 = performance.now();
    // console.log("Call to find nemo took "+ (t1-t0) + " milliseconds");
}

findNemo(nemo); 
findNemo(everyone);
findNemo(large);// O(n) -- linear time(it will take n steps to complete)
