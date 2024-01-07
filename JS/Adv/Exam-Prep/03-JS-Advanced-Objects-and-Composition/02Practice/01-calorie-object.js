function calorieObj(input) {
    let foods = {};

    for (let i = 0; i < input.length; i++) {
        foods[input[i]] = Number(input[++i]);
    }

    console.log(foods);
}

calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);