class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const frequency = new Map();

        for (let char of s) {
            frequency.set(char, (frequency.get(char) || 0) + 1);
        }

        for (let char of t) {
            if (!frequency.has(char)) return false;
            
            if (frequency.has(char)) {
                frequency.set(char, frequency.get(char) - 1);
            }

            if(frequency.get(char) == 0) frequency.delete(char)
        }
        return !frequency.size
    }
}
