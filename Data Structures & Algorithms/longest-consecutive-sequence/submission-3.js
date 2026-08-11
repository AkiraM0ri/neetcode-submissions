class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashtable = new Set();

        const startPoints = [];
        for (let num of nums) {
            hashtable.add(num);
        }

        for (let num of nums) {
            if (!hashtable.has(num - 1)) startPoints.push(num);
        }

        let res = 0
        for(let num of startPoints) {
            let curr = num
            let length = 1

            while(hashtable.has(curr + 1)) {
                length++
                curr++
            }

            res = Math.max(res, length)
        }

        return res;
    }
}
