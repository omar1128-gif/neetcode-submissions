class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const numsSet = new Set(nums);
        const n = nums.length;
        for (let i = 0; i <= n; i++) {
            if (!numsSet.has(i)) return i;
        }
    }
}
