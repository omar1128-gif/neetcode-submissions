class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (!nums || nums.length === 0 || k === 0) return [];

        const res = [];

        const deque = [];

        for (let i = 0; i < nums.length; i++) {
            while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
                deque.pop();
            }

            deque.push(i);

            if (deque[0] <= i - k) {
                deque.shift();
            }

            if (i >= k - 1) {
                res.push(nums[deque[0]]);
            }
        }

        return res;
    }
}
