class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number) {
        const prevMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];
            const complement = target - current;

            if (prevMap.has(complement)) return [prevMap.get(complement)!, i];

            prevMap.set(current, i);
        }
        return [];
    }
}
