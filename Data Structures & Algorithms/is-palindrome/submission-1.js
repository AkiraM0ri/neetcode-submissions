class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // time complexity: O(n)
    // space complexity: O(1)
    isPalindrome(s) {
        s = s.toLowerCase()
        let strWithoutSpace = s.replace(/[^a-z0-9]/gi, '')
        let right = strWithoutSpace.length - 1
        let left = 0
        
        while(right > left) {
            if(strWithoutSpace[left] !== strWithoutSpace[right]) return false
            
            left++
            right--
        }

        return true
    }
}
