class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map();
        for (let num of nums) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }
        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        for (let num of nums) {
            if (!frequency.has(num)) continue;

            const freq = frequency.get(num);

            bucket[freq].push(num);

            frequency.delete(num);
        }

        const res = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            if (!bucket[i].length) continue;
            if (k == 0) return res;

            for (let j = 0; j < bucket[i].length; j++) {
                if (k == 0) return res;
                res.push(bucket[i][j]);
                k -= 1;
            }
        }

        return res;
    }
}
