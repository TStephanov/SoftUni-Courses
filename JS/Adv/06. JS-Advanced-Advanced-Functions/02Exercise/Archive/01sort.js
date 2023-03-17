function sort(array, param) {
    switch (param) {
        case 'asc': {
            array.sort((a, b) => a - b);
        };
            break;

        case 'desc': {
            array.sort((a, b) => b - a);
        };
            break;
    }

    return array;
}

sort([14, 7, 17, 6, 8], 'asc');
sort([14, 7, 17, 6, 8], 'desc');