function solution() {
    let nutrients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }


    const cookingFuncs = {
        restock,
        prepare,
        report
    }

    function restock(nutrient, qty) {
        nutrients[nutrient] += Number(qty);
        return 'Success';
    }

    function prepare(recipe, qty) {
        const requiredIngredients = recipes[recipe];
        let enoughIngredients = true;
        let missingIngredient = '';
        
        // check if ingredients are enough
        for (let [ingredient, ingredientQty] of Object.entries(requiredIngredients)) {
            const currentQtyOfIngredient = nutrients[ingredient];

            if (currentQtyOfIngredient < ingredientQty * qty) {
                enoughIngredients = false;
                missingIngredient = ingredient;
                break;
            }
        }

        if (enoughIngredients) {
            // if enough
            for (let [ingredient, ingredientQty] of Object.entries(requiredIngredients)) {
                nutrients[ingredient] -= ingredientQty * qty;
            }
            return 'Success';
        } else {
            // if not enough
            return `Error: not enough ${missingIngredient} in stock`;
        }
    }

    function report() {
        const toPrint = Object.entries(nutrients)
            .map(([nutrient, qty]) => `${nutrient}=${qty}`)
            .join(' ');
        return toPrint;
    }

    function cook(string) {
        const [command, param1, param2] = string.split(' ');
        const result = cookingFuncs[command];
        const message = result(param1, param2);
        return message;
    }

    return cook;
}

let manager = solution();
// console.log(manager("restock flavour 50")); // Success 
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock

// console.log(manager('restock flavour 50')); // Success
// console.log(manager('prepare lemonade 4')); // Error: not enough carbohydrate in stock
// console.log(manager('restock carbohydrate 10')); // Success
// console.log(manager('restock flavour 10')); // Success
// console.log(manager('prepare apple 1')); // Success
// console.log(manager('restock fat 10')); // Success
// console.log(manager('prepare burger 1')); // Success
// console.log(manager('report')); // protein=0 carbohydrate=4 fat=3 flavour=55

console.log(manager('prepare turkey 1')); // Error: not enough protein in stock
console.log(manager('restock protein 10')); // Success
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10')); // Success
console.log(manager('prepare turkey 1')); // Error: not enough fat in stock
console.log(manager('restock fat 10')); // Success
console.log(manager('prepare turkey 1')); // Error: not enough flavour in stock
console.log(manager('restock flavour 10')); // Success
console.log(manager('prepare turkey 1')); // Success
console.log(manager('report')); // protein=0 carbohydrate=0 fat=0 flavour=0