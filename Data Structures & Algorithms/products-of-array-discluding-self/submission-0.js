class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = new Array(nums.length).fill(1);
        const suffix = new Array(nums.length).fill(1);

        for (let i = 0; i < nums.length; i++) {
            prefix[i + 1] = nums[i] * prefix[i];
        }

        for (let i = nums.length - 1; i > 0; i--) {
            suffix[i - 1] = nums[i] * suffix[i];
        }

        return suffix.map((elm, i) => elm * prefix[i])
    }
}
