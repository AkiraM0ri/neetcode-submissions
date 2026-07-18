class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const chars = {
            "{": "}",
            "[": "]",
            "(": ")",
        };

        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (chars[char]) {
                stack.push(chars[char]);
                continue;
            }

            if (stack[stack.length - 1] == char) stack.splice(stack.length - 1, 1);
            else return false;
        }

        return !stack.length;
    }
}
