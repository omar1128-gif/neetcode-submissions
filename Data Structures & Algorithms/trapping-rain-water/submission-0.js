class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let leftMax = 0;
        let rightMax = 0;
        let totalWater = 0;

        while (left < right) {
            // Update the highest wall seen from the left and right
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);

            // Work on the smaller side because it limits water height
            if (leftMax < rightMax) {
                totalWater += leftMax - height[left];
                left++;
            } else {
                totalWater += rightMax - height[right];
                right--;
            }
        }
        return totalWater;
    }
}
