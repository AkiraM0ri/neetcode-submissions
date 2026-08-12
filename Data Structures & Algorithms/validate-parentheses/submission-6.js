class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            "{": "}",
            "[": "]",
            "(": ")",
        };

        for (let char of s) {
            const closingChar = map[char];

            if (closingChar) {
                stack.push(closingChar);
                continue;
            }

            const pop = stack.pop();
            if (char !== pop) return false;
        }

        return !stack.length;
    }
}
