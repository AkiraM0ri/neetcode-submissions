class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let res = 0;

        while (l < r) {
            console.log(r, l);
            const h = Math.min(heights[r], heights[l]);
            const w = r - l;
            res = Math.max(res, h * w);

            if (heights[l] <= heights[r]) l++;
            else if (heights[l] > heights[r]) r--;
        }
        return res;
    }
}
