class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // time complexity: O(n)
    // space complexity: O(n)
    twoSum(nums, target) {
        const hashmap = new Map()

        for(let i = 0; i < nums.length; i++) {
            const num = nums[i]
            const complement = target - num
            if(hashmap.has(complement)) return [i, hashmap.get(complement)]
            hashmap.set(num, i)
        }
    }
}
