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

        for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
            count[s[windowEnd]] = (count[s[windowEnd]] || 0) + 1;

            while (windowEnd - windowStart + 1 - Math.max(...Object.values(count)) > k) {
                count[s[windowStart]]--;
                windowStart++;
            }

            res = Math.max(res, windowEnd - windowStart + 1);
        }
        return res;
    }
}
