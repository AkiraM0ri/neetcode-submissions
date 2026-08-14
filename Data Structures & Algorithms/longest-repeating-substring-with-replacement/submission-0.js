class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const frequency = new Map();
        let maxFrequency = 0;
        let longestRepeating = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            frequency.set(s[r], (frequency.get(s[r]) || 0) + 1);
            maxFrequency = Math.max(maxFrequency, frequency.get(s[r]));

            while (r - l + 1 - maxFrequency > k) {
                frequency.set(s[l], (frequency.get(s[l]) || 0) - 1);
                l++;
            }
            const winLength = r - l + 1;

            longestRepeating = Math.max(longestRepeating, winLength);
        }

        return longestRepeating;
    }
}
