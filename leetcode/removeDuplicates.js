function removeDuplicates(nums) {
    let k = 0;
    let value = nums[0];
    let unique = 0;
while(k<nums.length) 
{
    if(nums[k+1] == "_"){
        break;
    }
        if(value === nums[k+1]){
            nums.splice(k+1,1);
            //nums.push('_');
        }
        else {
            k+=1;
            value = nums[k];
            unique++;
            // console.log("k:",k);  
            // console.log("value:",value);
        }             
 }
 //unique++;
 return nums + " length: "+ unique;
}
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

//console.log(removeDuplicates([1,1,1,1,2,2,2,2,3,4,5]));