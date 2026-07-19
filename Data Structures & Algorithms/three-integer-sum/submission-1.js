class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        {
            const hashmap = new Set();

            nums.sort((a, b) => a - b);

            const res = [];
            for (let i = 0; i < nums.length; i++) {
                if (hashmap.has(nums[i])) continue;

                hashmap.add(nums[i]);

                const temp = [];
                let l = i + 1;
                let r = nums.length - 1;
                while (l < r) {
                    if (nums[i] + nums[l] + nums[r] == 0) {
                        if (hashmap.has([nums[i], nums[l], nums[r]].join(","))) {
                            l++;
                            continue;
                        }
                        temp.push(nums[i], nums[l], nums[r]);
                        hashmap.add(temp.join(","));
                        res.push([...temp]);
                        temp.length = 0;
                        l++;
                    }

                    if (nums[i] + nums[l] + nums[r] > 0) {
                        r--;
                    }

                    if (nums[i] + nums[l] + nums[r] < 0) {
                        l++;
                    }
                }

                temp.length ? res.push(temp) : null;
            }

            return res;
        }
    }
}
