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
            if (prevMap.has(target - current)) return [prevMap.get(target - current)!, i];

            prevMap.set(current, i);
        }
        return [];
    }
}
