class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (const num of numSet) {
            // Check if 'num' is the start of a sequence
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                longest = Math.max(longest, currentStreak);
            }
        }
        return longest;
    }
}
