class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        const frequency = new Map();
        let anwser = 0;

        for (let i = 0; i < nums.length; i++) {
            const number = nums[i];
            anwser += frequency.get(number) || 0;

            frequency.set(number, (frequency.get(number) || 0) + 1);
        }

        return anwser;
    }
}
