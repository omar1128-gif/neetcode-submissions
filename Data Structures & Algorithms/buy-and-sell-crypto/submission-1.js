class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0; // buy pointer
        let right = 1; // sell pointer
        let maxProfit = 0;

        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                const profit = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit, profit);
            } else left = right;

            right++;
        }
        return maxProfit;
    }
}
