/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1; // Initialize the count of unique elements to 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[count - 1]) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
}

removeDuplicates([1,1,2]);

//-------------- diff logic but not submit in leet code 

/*
var removeDuplicates = function(nums) {
   
    let a= nums.filter((num,ind)=>{
     return (nums.indexOf(num)==ind)
   
})
return a;

};

console.log(removeDuplicates([1,1,2]))


var removeDuplicates = function(nums) {
   
let k=[];
for (let i = 0; i < nums.length; i++) {
  if(nums.indexOf(nums[i])==i)
  {
    k.push(nums[i])
  }
}
return k;


};

console.log(removeDuplicates([1,1,2]))

*/