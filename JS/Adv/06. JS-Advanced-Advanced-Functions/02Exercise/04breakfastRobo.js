function solution() {
    let receipts = {
        'apple': {
            carbohydrate: 1,
            flavour: 2,
        },
        'lemonade': {
            carbohydrate: 10,
            flavour: 20,
        },
        'burger': {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        'eggs': {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        'turkey': {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    let nutrients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let commands = {
        restock,
        prepare,
        report
    }

    function restock(nutrient, qty) {
        nutrients[nutrient] += Number(qty);
        return 'Success';
    }

    function prepare(receipt, portionsCount) {
        const ingredientsToUse = receipts[receipt]; // object
        // console.log(ingredientsToUse) // Sample: { carbohydrate: 10, flavour: 20 }
        let message = '';
        let enoughNutrients = true;
        let nutrientShort = '';


        // nutrients available, will be enough to cook the receipt
        // - yes -> cook the receipt and deduct the nutrients
        // - no -> check first nutrient, fall short of qty and print the message
        for (let [nutrient, nutrQty] of Object.entries(ingredientsToUse)) {
            const currentStock = nutrients[nutrient];

            if (currentStock < nutrQty * Number(portionsCount)) {
                enoughNutrients = false;
                nutrientShort = nutrient;
                break;
            }
        }

        if (enoughNutrients) {
            for (let [nutrient, nutrQty] of Object.entries(ingredientsToUse)) {
                nutrients[nutrient] -= nutrQty * Number(portionsCount);
                message = 'Success';
            }
        } else {
            message = `Error: not enough ${nutrientShort} in stock`;
        }

        return message;
    }

    function report() {
        const printResult = Object.entries(nutrients).map(([nutrient, qty]) => `${nutrient}=${qty}`);
        return printResult.join(' ');
    }

    function call(input) {
        const [command, param1, param2] = input.split(' ');
        const resultFunc = commands[command];
        const message = resultFunc(param1, param2);
        return message;
    }

    return call;
}


let manager = solution();
// console.log(manager("restock flavour 50")); // Success
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 

console.log(manager("restock flavour 50 "));
console.log(manager("prepare lemonade 4 "));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
// console.log(manager('prepare turkey 1')); // Error: not enough protein in stock
// console.log(manager('restock protein 10')); // Success
// console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
// console.log(manager('restock carbohydrate 10')); // Success
// console.log(manager('prepare turkey 1')); // Error: not enough fat in stock
// console.log(manager('restock fat 10')); // Success
// console.log(manager('prepare turkey 1')); // Error: not enough flavour in stock
// console.log(manager('restock flavour 10')); // Success
// console.log(manager('prepare turkey 1')); // Success
// console.log(manager('report')); // protein=0 carbohydrate=0 fat=0 flavour=0