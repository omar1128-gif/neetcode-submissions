class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const k = s1.length;
        const n = s2.length;

        if (k > n) return false;

        const getIdx = (char) => char.charCodeAt(0) - 97;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for (let i = 0; i < k; i++) {
            let s1CharIndex = getIdx(s1[i]);
            let s2CharIndex = getIdx(s2[i]);
            s1Count[s1CharIndex] = (s1Count[s1CharIndex] || 0) + 1;
            s2Count[s2CharIndex] = (s2Count[s2CharIndex] || 0) + 1;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) matches++;
        }

        let windowStart = 0;

        for (let windowEnd = s1.length; windowEnd < s2.length; windowEnd++) {
            if (matches === 26) return true;

            let index = getIdx(s2[windowEnd]);
            s2Count[index]++;

            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--;
            }

            index = getIdx(s2[windowStart]);
            s2Count[index]--;

            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--;
            }

            windowStart++;
        }

        return matches === 26;
    }
}
