class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = new Array(nums.length).fill(1);
        const suffix = new Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            const r = nums.length - i
            prefix[i] = nums[i - 1] * prefix[i - 1];
            suffix[r - 1] = nums[r] * suffix[r];
        }

        return suffix.map((elm, i) => elm * prefix[i]);
    }
}
