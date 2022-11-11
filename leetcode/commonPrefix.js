/*Write a function to find the longest common prefix string  amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs) {
    //let steps = 0;
    let common=strs[0];
    for(let i=1; i<strs.length; i++) {
        //steps++;
        //console.log(strs[i]);
       for(let k =0; k< common.length; k++) {
        if(common.charAt(k) !== strs[i].charAt(k)) {
            //steps++;
            if(k === 0) {
                common = "";
                return common;
            } else {
                common = common.substr(0,k);
                break;
            }
         }  
       }     
    }
    return common;
};

console.log(longestCommonPrefix(["flower","flow","fright","kite","light","mike","five"]));

//Input: strs = ["flower","flow","flight"]
//Output: "fl"

//Input: strs = ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.