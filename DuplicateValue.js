//first approach takes O(n^2) time complexity
let arr = [1,2,3];
let flag = false;
for (let i = 0; i <=arr.length ; i++) {
    for(let j=i+1; j<arr.length ;j++){
        if(arr[i]==arr[j])
        {
            flag = true;
            console.log("true");
            break;

        }
        
    }
    
}
if (flag==false){
    console.log("false");
}
//second approach takes O(n) time complexity
function containsDuplicate(nums) {
const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }

    return false;
}