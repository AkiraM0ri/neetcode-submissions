class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // set of valid characters
        const validChar = {
            "(": ")",
            "{": "}",
            "[": "]",
        };

        // create a stack
        const stack = [];

        // check every char of my word
        for (let char of s) {
            if (validChar[char]) {
                stack.push(validChar[char]);
            } else {
                const lastChar = stack.pop();
                // if I find an invalid char, return false
                if (char != lastChar) return false;
            }
        }

        // If I don't find and invalid char, return true
        return !stack.length
    }
}
