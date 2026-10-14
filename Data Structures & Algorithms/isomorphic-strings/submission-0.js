class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        if (s.length !== t.length) return false;
        const sMap = new Map();
        const tMap = new Map();

        for (let i = 0; i < s.length; i++) {
            const c1 = s[i],
                c2 = t[i];

            if (sMap.has(c1) && sMap.get(c1) !== c2) return false;
            if (tMap.has(c2) && tMap.get(c2) !== c1) return false;

            sMap.set(c1, c2);
            tMap.set(c2, c1);
        }
        return true;
    }
}
