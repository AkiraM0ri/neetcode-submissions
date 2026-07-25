class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            stack.push(i);
            while (temperatures[stack[stack.length - 1]] < temperatures[i + 1]) {
                res[stack[stack.length - 1]] = i + 1 - stack[stack.length - 1];
                stack.pop();
            }
        }

        return res;
    }
}
