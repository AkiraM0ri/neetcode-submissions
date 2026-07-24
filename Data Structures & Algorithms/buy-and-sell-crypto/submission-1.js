class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let minVal = Infinity;
        for (let i = 0; i < prices.length; i++) {
            const price = prices[i];
            minVal = Math.min(price, minVal);
            
            const possibleProfit = price - minVal
            profit = Math.max(possibleProfit, profit);
        }

        return profit;
    }
}
