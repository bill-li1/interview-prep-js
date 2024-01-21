const twoSum = (nums, target) => {
    let newmap = new Map();
    for (let i = 0; i < nums.length; i++) {
        newmap.set(nums[i], i);
    }
    console.log(nums.length);
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (newmap.has(complement) && newmap.get(complement) != i) {
            return [i, newmap.get(complement)];
        }
    }
};


