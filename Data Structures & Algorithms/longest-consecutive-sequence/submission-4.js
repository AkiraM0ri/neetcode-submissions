class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashtable = new Set();

        for (let num of nums) {
            hashtable.add(num);
        }

        let res = 0;
        for (let num of nums) {
            let curr = num;
            let length = 1;

            if (!hashtable.has(num - 1)) {
                while (hashtable.has(curr + 1)) {
                    length++;
                    curr++;
                }
            }
            res = Math.max(res, length);
        }

        return res;
    }
}
