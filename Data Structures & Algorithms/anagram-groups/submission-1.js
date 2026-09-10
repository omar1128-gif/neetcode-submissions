class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            const sortedKey = str.split("").sort().join("");

            if (!map.has(sortedKey)) map.set(sortedKey, []);

            map.get(sortedKey).push(str);
        }

        return Array.from(map.values());
    }
}
