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

            if (frequency.has(number)) {
                anwser += frequency.get(number);
            }

            frequency.set(number, (frequency.get(number) || 0) + 1);
        }

        return anwser;
    }
}
