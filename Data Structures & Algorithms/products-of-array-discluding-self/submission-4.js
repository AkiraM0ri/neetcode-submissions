class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            res[i] = nums[i - 1] * res[i - 1];
        }

        let rightProduct = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= rightProduct;
            rightProduct *= nums[i];
        }

        return res;
    }
}
