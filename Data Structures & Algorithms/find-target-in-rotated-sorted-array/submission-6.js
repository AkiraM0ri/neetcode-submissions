class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // time: O(log n) | space: O(1)
    search(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (nums[mid] == target) return mid;

            if (nums[low] <= nums[mid]) {
                if (isTargetInsideOf(low, mid)) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else {
                if (isTargetInsideOf(mid, high)) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }

        function isTargetInsideOf(initialRange, lastRange) {
            if (nums[initialRange] <= target && target <= nums[lastRange]) {
                return true;
            }

            return false;
        }

        return -1;
    }
}
