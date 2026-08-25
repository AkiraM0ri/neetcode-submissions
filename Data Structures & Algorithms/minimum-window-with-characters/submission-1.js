class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    // time: O(s+t) | space: O(n)
    minWindow(s, t) {
        const requireT = new Map();
        for (let char of t) {
            requireT.set(char, (requireT.get(char) || 0) + 1);
        }

        const actualWindow = new Map();

        let left = 0;
        let have = 0;
        let minLen = Infinity;
        let answerStart = left;

        for (let right = 0; right < s.length; right++) {
            const rChar = s[right];
            actualWindow.set(rChar, (actualWindow.get(rChar) || 0) + 1);

            if (actualWindow.get(rChar) == requireT.get(rChar)) have++;

            while (have == requireT.size) {
                const lChar = s[left];
                const window = right - left + 1;

                if (window < minLen) {
                    minLen = window;
                    answerStart = left;
                }

                if (actualWindow.get(lChar) == requireT.get(lChar)) have--;

                actualWindow.set(lChar, (actualWindow.get(lChar) || 0) - 1);
                left++;
            }
        }

        return minLen !== Infinity ? s.substring(answerStart, answerStart + minLen) : "";
    }
}
