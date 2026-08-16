class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const hashmap = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (hashmap.has(nums[i])) {
                if (i - hashmap.get(nums[i]) <= k) return true;
            }

            hashmap.set(nums[i], i);
        }

        return false;
    }
}
