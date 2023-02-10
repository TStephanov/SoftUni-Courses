function firstLast(input) {
    let result = input.map(a => Number(a));
    let first = result[0];
    let last = result[result.length - 1];
    
    return first + last;
}

firstLast(['20', '30', '40']); // 60
firstLast(['5', '10']); // 15
firstLast(['13']); // 26