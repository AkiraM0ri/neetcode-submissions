class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // runtime: O(n) 
    // space: O(n)
    hasDuplicate(nums) {
        if(!nums.length) return false

        const hashmap = new Set()

        for(let i = 0; i < nums.length; i++) {
            if(hashmap.has(nums[i])) return true

            hashmap.add(nums[i])
        }

        return false
    }
}
