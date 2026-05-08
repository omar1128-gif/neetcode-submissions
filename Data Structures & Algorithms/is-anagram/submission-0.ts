class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string) {
        return s.split('').sort().join('') === t.split('').sort().join('');
    }
}
