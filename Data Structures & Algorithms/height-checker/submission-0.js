class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        const expected = heights.toSorted((a, b) => a - b);
        let mismatches = 0;

        for (let i = 0; i < heights.length; i++) {
            if (heights[i] !== expected[i]) mismatches++;
        }

        return mismatches;
    }
}
