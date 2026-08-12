class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0;
        let high = nums.length;

        while (low < high) {
            const mid = Math.floor((low + high) / 2);

            if (nums[mid] > nums[high]) {
                low = mid + 1
            } else {
                high = high - 1
            }
        }

        return nums[low]
    }
}
