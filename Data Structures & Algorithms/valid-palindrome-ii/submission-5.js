class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            let charL = s[l];
            let charR = s[r];

            if (charL !== charR) {
                const isValidSkipLeft = checkRemainingStr(l + 1, r);
                const isValidSkipRight = checkRemainingStr(l, r - 1);

                if (isValidSkipLeft || isValidSkipRight) {
                    return true;
                } else {
                    return false;
                }
            }

            l++;
            r--;
        }

        function checkRemainingStr(l, r) {
            while (l < r) {
                if (s[r] !== s[l]) return false;
                l++;
                r--;
            }

            return true;
        }

        return true;
    }
}
