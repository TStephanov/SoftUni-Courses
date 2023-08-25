function sort(arr, sort) {
    
    switch (sort) {
        case 'asc': {
            arr = arr.sort((a, b) => a - b);
        };
            break;
        case 'desc': {
            arr = arr.sort((a, b) => b - a);
        };
            break;
    }

    return arr;
}

sort([14, 7, 17, 6, 8], 'asc');