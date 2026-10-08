class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let n = nums.length;

        if (n === 0) return 0;

        let left = 0;
        let right = 0;

        while (right < n) {
            nums[left] = nums[right];

            while (right < n && nums[right] === nums[left]) right++;

            left++;
        }
        return left;
    }
}
