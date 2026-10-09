class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (!strs.length) return "";

        let result = "";

        function CheckCharInAllStrs(charIndex, strs) {
            for (let i = 1; i < strs.length; i++) {
                if (strs[i][charIndex] !== strs[0][charIndex]) return false;
            }
            return true;
        }

        for (let i = 0; i < strs[0].length; i++) {
            if (CheckCharInAllStrs(i, strs)) result += strs[0][i];
            else break;
        }
        return result;
    }
}
