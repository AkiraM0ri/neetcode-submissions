class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashmap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            const pair = target - num;
            if (hashmap.has(pair)) return [hashmap.get(pair), i];
            hashmap.set(num, i);
        }
    }
}
