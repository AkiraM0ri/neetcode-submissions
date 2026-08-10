class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        let index = 1;
        let answer = 0
        for (let i = 0; i < n; i++) {
            if(index >= i) answer++

            n = n - index++
        }

        return answer
    }
}
