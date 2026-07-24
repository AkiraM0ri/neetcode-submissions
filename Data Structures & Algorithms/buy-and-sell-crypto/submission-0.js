class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        for (let i = 0; i < prices.length; i++) {
            const price = prices[i];

            for (let nextPriceIdx = i + 1; nextPriceIdx < prices.length; nextPriceIdx++) {
                const nextPrice = prices[nextPriceIdx];
                if (price > nextPrice) continue;
                const possibleProfit = nextPrice- price;
                profit = Math.max(possibleProfit, profit);
            }
        }

        return profit;
    }
}
