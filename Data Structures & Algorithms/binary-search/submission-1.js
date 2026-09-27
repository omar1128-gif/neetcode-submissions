class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function binarySearch(left, right, nums, target) {
            if (left > right) return -1;
            let mid = Math.floor(left + (right - left) / 2);

            if (nums[mid] === target) return mid;
            return nums[mid] < target
                ? binarySearch(mid + 1, right, nums, target)
                : binarySearch(left, mid - 1, nums, target);
        }

        return binarySearch(0, nums.length - 1, nums, target);
    }
}
