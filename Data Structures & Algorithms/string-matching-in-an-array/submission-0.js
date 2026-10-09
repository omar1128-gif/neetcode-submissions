class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        words.sort((a, b) => a.length - b.length);

        const result = [];

        for (let i = 0; i < words.length; i++) {
            let candidate = words[i];

            for (let j = i + 1; j < words.length; j++) {
                if (words[j].includes(candidate)) {
                    result.push(candidate);
                    break;
                }
            }
        }

        return result;
    }
}
