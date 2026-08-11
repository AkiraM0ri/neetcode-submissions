class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const res = [];
        for (let str of strs) {
            let strEncoded = "";
            if (str.length == 0) {
                res.push("isEmptyStr");
                continue;
            }
            for (let idx in str) {
                const char = str[idx];
                strEncoded += char.charCodeAt();
                if (idx < str.length - 1) {
                    strEncoded += `.-.`;
                }
            }
            res.push(strEncoded);
        }

        return res.join("abacaxi");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const arrEncond = str.split("abacaxi");
        const res = [];
        for (let str of arrEncond) {
            if (str.includes("isEmptyStr")) {
                res.push("");
                continue;
            } else if (str == "") {
                continue;
            }
            console.log(str);
            let decoded = "";
            for (let char of str.split(".-.")) {
                decoded += String.fromCharCode(char);
            }

            res.push(decoded);
        }
        return res;
    }
}
