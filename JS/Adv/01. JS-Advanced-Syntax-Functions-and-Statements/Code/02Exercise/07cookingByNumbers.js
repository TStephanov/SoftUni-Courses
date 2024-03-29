function cookingByNumbers(...input) {
    let number = Number(input.shift());

    let actions = {
        'chop': (num) => num / 2,
        'dice': (num) => Math.sqrt(num),
        'spice': (num) => num += 1,
        'bake': (num) => num * 3,
        'fillet': (num) => num = num - num * 0.2
    }

    for (let action of input) {
        number = actions[action](number);
        console.log(number);
    }
}

// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// 16 8 4 2 1
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// 3 4 2 6 4.8