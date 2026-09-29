class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for (let index = 0; index < nums.length; index++) {
            const num = nums[index];
            if (map.has(target - num)) {
                return [map.get(target - num), index]
            } else {
                map.set(nums[index], index)
            }
        }
    }
}
