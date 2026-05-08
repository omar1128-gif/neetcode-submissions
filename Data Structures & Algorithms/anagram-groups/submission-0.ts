class Solution {
    private getSortedKey(s: string): string {
        return s.split("").sort().join("");
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]) {
        const groups = new Map<string, string[]>();
        for (const str of strs) {
            const key = this.getSortedKey(str);

            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key)!.push(str);
        }
       
        return Array.from(groups.values());
    }
}
