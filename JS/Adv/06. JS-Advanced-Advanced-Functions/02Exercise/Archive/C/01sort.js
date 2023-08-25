function sort(nums, order) {
    const sorting = {
        asc,
        desc,
    }

    function asc(array) {
        return array.sort((a, b) => a - b);
    }

    function desc(array) {
        return array.sort((a, b) => b - a);
    }

    nums = sorting[order](nums);

    /*
    // Other options
    // order === 'asc' ? nums = sorting[order](nums) : nums = sorting[order](nums);
    // order === 'asc' ? nums = sorting['asc'](nums) : nums = sorting['desc'](nums);
    // order === 'asc' ? nums = sorting.asc(nums) : nums = sorting.desc(nums);
    */

    /**
    // Separate option
    const sorting = {
        up: ascending,
        down: descending,
    }

    if (order === 'asc') {
        nums = sorting.up(nums);
    } else if (order === 'desc') {
        nums = sorting.down(nums);
    }
    */

    return nums;
}

sort([14, 7, 17, 6, 8], 'asc');
sort([14, 7, 17, 6, 8], 'desc');