class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuyPrice = prices[0];
        let maxProfit = 0;
        for (let i = 1; i < prices.length; i++) {
            const currentPrice = prices[i];

            if (currentPrice < minBuyPrice) minBuyPrice = currentPrice;
            else {
                const currentProfit = currentPrice - minBuyPrice;
                maxProfit = Math.max(maxProfit, currentProfit);
            }
        }
        return maxProfit;
    }
}
