function sort(input, order) {
    const functions = {
        asc,
        desc
    }

    function asc(array) {
        return array.sort((a, b) => a - b);
    }

    function desc(array) {
        return array.sort((a, b) => b - a);
    }

    input = functions[order](input);

    return input;
}

sort([14, 7, 17, 6, 8], 'asc');
sort([14, 7, 17, 6, 8], 'desc');