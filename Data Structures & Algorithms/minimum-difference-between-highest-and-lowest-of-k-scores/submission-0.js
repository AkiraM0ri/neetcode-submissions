class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b);
        let res = Infinity
        for (let slow = 0; slow <= nums.length - k; slow++) {
            const fast = slow + (k - 1);

            const diff = nums[fast] - nums[slow];
            res = Math.min(res, diff)
        }
        return res
    }
}
