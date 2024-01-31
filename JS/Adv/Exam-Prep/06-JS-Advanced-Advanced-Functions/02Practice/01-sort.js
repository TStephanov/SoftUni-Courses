function sort(arr, ordering) {
    let result = '';
    ordering === 'asc' ? result = sortAsc(arr) : result = sortDesc(arr);

    function sortAsc(array) {
        return array.sort((a, b) => a - b);
    }
    function sortDesc(array) {
        return array.sort((a, b) => b - a);
    }

    return result;
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));
console.log(sort([14, 7, 17, 6, 8], 'desc'));