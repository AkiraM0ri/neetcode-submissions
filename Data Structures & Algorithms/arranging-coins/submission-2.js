class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        let rows = 1
        let correctRows = 0

        while (n >= rows) {
            n -= rows
            rows++
            correctRows++
        } 
        
        return correctRows
    }
}
