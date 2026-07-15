class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // complexity time: O(2n) that can be reduced to O(n)
    // space time: O(N)
    isAnagram(s, t) {
        if(s.length < t.length) return false
        const hashtable = new Map();

        for (const char of s) {
            if (hashtable.has(char)) {
                hashtable.set(char, hashtable.get(char) + 1);
                continue
            }

            hashtable.set(char, 1);
        }

        for (const char of t) {
            if (hashtable.has(char)) {
                hashtable.set(char, hashtable.get(char) - 1);
            }

            if (hashtable.get(char) == 0) hashtable.delete(char);
        }

        return !hashtable.size;
    }
}
