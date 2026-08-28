class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const target = nums.length - 1;

        let highestJump = 0;
        for (let i = 0; i < nums.length; i++) {
            if (i > highestJump) return false;

            highestJump = Math.max(highestJump, i + nums[i]);
            if (highestJump >= target) return true;
        }

        return false;
    }
}
