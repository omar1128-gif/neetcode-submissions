class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let length = 0;
        let i = s.length - 1;

        while (i >= 0 && s[i] === " ") i--;

        while (i >= 0 && s[i] !== " ") {
            length++;
            i--;
        }

        return length;
    }
}
