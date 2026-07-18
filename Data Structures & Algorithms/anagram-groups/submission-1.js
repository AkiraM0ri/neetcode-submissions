class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // time: O(n^2)
    // space: O(n)
    groupAnagrams(strs) {
        const keyGen = new Array(26).fill(0);

        const hashmap = new Map();

        for (let word of strs) {
            for (let char of word) {
                const charCode = char.charCodeAt(0) - 97;
                keyGen[charCode]++;
            }

            const key = keyGen.join(",");
            if (!hashmap.get(key)) {
                hashmap.set(key, new Array());
            }

            const val = hashmap.get(key);
            val.push(word);
            hashmap.set(key, val);
            keyGen.fill(0);
        }

        return [...hashmap.values()]
    }
}
