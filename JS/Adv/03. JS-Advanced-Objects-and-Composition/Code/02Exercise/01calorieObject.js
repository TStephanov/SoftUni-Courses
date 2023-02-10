function calorieObject(input) {
    let foodInfo = {};

    for (let i = 0; i < input.length; i += 2) {
        let food = input[i];
        let calories = Number(input[i + 1]);
        foodInfo[food] = calories;
    }

    console.log(foodInfo);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);