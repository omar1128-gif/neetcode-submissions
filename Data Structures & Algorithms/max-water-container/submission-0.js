class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            let area = (right - left) * Math.min(heights[left], heights[right]);

            if (!maxArea) maxArea = area;

            maxArea = Math.max(maxArea, area);

            if (heights[left] < heights[right]) left++;
            else right--;
        }
        return maxArea;
    }
}
