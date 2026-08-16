class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // time: O(n) | space: O(n)
    checkInclusion(s1, s2) {
        const frequency = new Map();
        for (let char of s1) {
            frequency.set(char, (frequency.get(char) || 0) + 1);
        }

        let frequency2 = new Map();
        let slow = 0;
        let matches = 0;
        for (let fast = 0; fast < s2.length; fast++) {
            frequency2.set(s2[fast], (frequency2.get(s2[fast]) || 0) + 1);

            if (frequency.has(s2[fast])) {
                if (frequency.get(s2[fast]) == frequency2.get(s2[fast])) {
                    matches++;
                } else if (frequency2.get(s2[fast]) == frequency.get(s2[fast]) + 1) {
                    matches--;
                }
            }

            if (fast - slow >= s1.length) {
                if (frequency.has(s2[slow])) {
                    if (frequency2.get(s2[slow]) == frequency.get(s2[slow])) {
                        matches--;
                    } else if (frequency2.get(s2[slow]) == frequency.get(s2[slow]) + 1) {
                        matches++;
                    }

                    frequency2.set(s2[slow], (frequency2.get(s2[slow]) || 0) - 1);

                    if (frequency2.get(s2[slow]) == 0) frequency2.delete(s2[slow]);
                }

                slow++;
            }

            if (matches == frequency.size) return true;
        }

        return false;
    }
}
