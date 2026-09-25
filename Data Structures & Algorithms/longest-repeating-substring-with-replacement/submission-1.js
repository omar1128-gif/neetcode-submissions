class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = {};
        let res = 0;
        let windowStart = 0;
        let maxFreq = 0;

        for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
            count[s[windowEnd]] = (count[s[windowEnd]] || 0) + 1;
            maxFreq = Math.max(maxFreq, count[s[windowEnd]]);
            while (windowEnd - windowStart + 1 - maxFreq > k) {
                count[s[windowStart]]--;
                windowStart++;
            }

            res = Math.max(res, windowEnd - windowStart + 1);
        }

        return res;
    }
}
