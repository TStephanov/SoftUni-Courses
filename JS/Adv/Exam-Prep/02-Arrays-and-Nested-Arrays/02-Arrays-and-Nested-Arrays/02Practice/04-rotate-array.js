function rotate(input, rotations) {
    if (rotations === input.length) {
        console.log(input.join(' '));
    } else {
        for (let i = 0; i < rotations; i++) {
            input.unshift(input.pop());
        }

        console.log(input.join(' '));
    }
}

rotate(['1', '2', '3', '4'], 4);
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15);