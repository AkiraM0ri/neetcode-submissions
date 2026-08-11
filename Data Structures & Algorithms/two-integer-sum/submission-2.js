class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashtable = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const complement = target - num;

            if (hashtable.has(complement)) return [hashtable.get(complement), i];

            hashtable.set(num, i);
        }
    }
}
