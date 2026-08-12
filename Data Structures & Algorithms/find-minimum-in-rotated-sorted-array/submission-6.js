class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums.length < 2) return nums[0]
        let low = 0;
        let high = nums.length - 1;
        let res = Infinity;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);

            if (nums[mid] > nums[high]) {
                low = mid + 1;
            } else if (nums[mid] < nums[high]) {
                high = mid;
            }
            res = Math.min(nums[high], res);
        }

        return res;
    }
}
