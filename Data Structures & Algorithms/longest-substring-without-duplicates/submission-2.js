class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let res = 0;
        let l = 0;
        let r = 0;
        for (let i = 0; i < s.length; i++) {
            if (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }

            while (!set.has(s[r])) {
                set.add(s[r]);
                r++;
                res = Math.max(res, set.size);
                if (r == s.length) return res;
            }
        }

        return res;
    }
}
