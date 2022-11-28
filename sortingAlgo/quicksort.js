const nums = [1,13,33,10,45,3,13];

function partition(arr,l,r){
    let pivot = arr[r];
    let i = l-1;
    for(let j=l;j<r;j++){
        //console.log("i:",i,"j:",j);
        if(arr[j] <= pivot){
            let temp = arr[i+1];
            arr[i+1] = arr[j];
            arr[j] = temp;
            i++;        
        } 
    }
    let temp = arr[i+1];
    arr[i+1]= pivot;
    arr[r] = temp;
    return i+1;
}

function quickSort(arr,l,r){
    if(l>=r)
    return;
    p = partition(arr,l,r)

    quickSort(arr,l,p-1);
    quickSort(arr,p+1,r)

}

quickSort(nums,0,nums.length-1);
console.log("Sorted array:",nums);

//console.log(partition(nums));

// algo to return array such that values less than pivot
// should be on left side and values greater than pivot 
// is on right side

// Step:1 Take last value as Pivot
// Step:2 do a loop to traverse the array from 0 to second last element
//(cuz pivot is last element)
//take two variables i and j(from for loop)
// Initialially value of i = j(assume 1st element < pivot not considering case element >= pivot)
// check if array element is  < pivot then 
// do i++ (except first time when i and j at 0)
// swap(only if j-i>1)  let temp = arr[i+1];
// arr[i+1] = arr[j]
//arr[j] = temp  const nums = [2,1,10,33,45,8,13];
// if array element is  > pivot then do nothing
// after iteration ,swap pivot at index i+1, it will be at right index
// cuz at its left values are less than pivot and at right values are greater than pivot

