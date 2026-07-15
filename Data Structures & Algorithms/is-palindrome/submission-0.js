class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
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
