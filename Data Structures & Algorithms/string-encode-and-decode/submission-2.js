class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (const str of strs) {
            result += str.length + "#" + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") j++;

            const length = parseInt(str.substring(i, j), 10);

            i = j + 1;

            j = i + length;

            result.push(str.substring(i, j));

            i = j;
        }
        return result;
    }
}
