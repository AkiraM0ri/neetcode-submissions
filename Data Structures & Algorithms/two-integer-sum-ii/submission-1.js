class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // time: O(n)
    // space: O(1)
    twoSum(numbers, target) {
        let right = numbers.length - 1;
        let left = 0;

        while (left < right) {
            const sum = numbers[right] + numbers[left];
            if (sum == target) return [left + 1, right + 1];
            if (sum > target) {
                right--;
                continue;
            }
            left++;
        }
    }
}
