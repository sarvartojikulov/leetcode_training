// 35.Search Insert Position
// https://leetcode.com/problems/search-insert-position/
// Date: 12.07.2022

function binarySearchPosition(
  list: number[],
  left: number,
  right: number,
  target: number
): any {
  const middle = left + Math.floor((right - left) / 2);
  const element = list[middle];
  if (element >= target && list[middle - 1] < target) {
    if (list[middle - 1] === target) {
      return middle - 1;
    }
    return middle;
  }
  if (element > target)
    return binarySearchPosition(list, left, middle - 1, target);

  return binarySearchPosition(list, middle + 1, right, target);
}

function searchInsert(nums: number[], target: number) {
  if (nums[0] >= target) return 0;
  let n = nums.length;
  if (nums[n - 1] < target) return n;
  if (nums[n - 1] === target) return n - 1;
  return binarySearchPosition(nums, 0, n - 1, target);
}

searchInsert([1, 3, 5, 6], 5);

export default searchInsert;
