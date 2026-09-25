class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        let sCount = {};
        let tCount = {};

        for (let i = 0; i < t.length; i++) tCount[t[i]] = (tCount[t[i]] || 0) + 1;

        let have = 0;
        const need = Object.keys(tCount).length;

        let resLen = Infinity;
        let resRange = [-1, -1];
        let windowStart = 0;

        for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
            const rightChar = s[windowEnd];
            sCount[rightChar] = (sCount[rightChar] || 0) + 1;

            if (tCount[rightChar] && sCount[rightChar] === tCount[rightChar]) have++;

            while (have === need) {
                if (windowEnd - windowStart - 1 < resLen) {
                    resLen = windowEnd - windowStart - 1;
                    resRange = [windowStart, windowEnd];
                }

                const leftChar = s[windowStart];
                sCount[leftChar]--;

                if (tCount[leftChar] && sCount[leftChar] < tCount[leftChar]) have--;

                windowStart++;
            }
        }

        const [start, end] = resRange;

        return resLen === Infinity ? "" : s.substring(start, end + 1);
    }
}
