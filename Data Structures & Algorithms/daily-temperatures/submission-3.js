class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    // time: O(n) & space: O(n)
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && temperatures[stack.at(-1)] < temperatures[i]) {
                const top = stack.pop();
                res[top] = i - top;
            }
            stack.push(i);
        }

        return res;
    }
}
