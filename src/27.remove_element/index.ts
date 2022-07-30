// 27. Remove Element
// https://leetcode.com/problems/remove-element/
// Date 14.07.2022

function removeElement(nums: number[], val: number): any {
  var k = 0;
  for (; k < nums.length; k++) {
    if (nums[k] === val) {
      nums.splice(k, 1);
      k--;
    }
  }
  return k;
}
