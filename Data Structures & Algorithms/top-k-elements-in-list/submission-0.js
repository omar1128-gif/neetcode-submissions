class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();

        for (const num of nums) freqMap.set(num, (freqMap.get(num) ?? 0) + 1);

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of freqMap) buckets[freq].push(num);

        let result = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            if (buckets[i].length > 0) result.push(...buckets[i]);
        }

        return result.slice(0, k);
    }
}
