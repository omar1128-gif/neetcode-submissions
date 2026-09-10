class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];

            if (numsMap.has(complement)) return [numsMap.get(complement), i];

            numsMap.set(nums[i], i);
        }
        return [];
    }
}
