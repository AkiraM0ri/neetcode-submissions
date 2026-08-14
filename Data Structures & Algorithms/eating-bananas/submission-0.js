class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = 0;
        for (let banana of piles) {
            high = Math.max(high, banana);
        }

        while (low < high) {
            const mid = Math.floor((low + high) / 2);

            if (canEat(mid)) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }

        return low;

        function canEat(mid) {
            let total = 0;
            for (let banana of piles) {
                total += Math.ceil(banana / mid);
            }

            return total <= h;
        }
    }
}
