function solution() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function (input) {
        // restock <microelement> <quantity>
        // prepare <recipe> <quantity>
        // report

        let [command, param1, param2] = input.split(' ');

        switch (command) {
            case 'restock': {
                let nutrient = param1;
                let qty = Number(param2);

                stock[nutrient] += qty;
                return 'Success';
            };

            case 'prepare': {
                let recipe = param1;
                let qty = Number(param2);
                let appleIngredients = { carbohydrate: 1, flavour: 2 };
                let lemonadeIngredients = { carbohydrate: 10, flavour: 20 };
                let burgerIngredients = { carbohydrate: 5, fat: 7, flavour: 3 };
                let eggsIngredients = { protein: 5, fat: 1, flavour: 1 };
                let turkeyIngredients = { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 };

                switch (recipe) {
                    case 'apple': {
                        if (stock.carbohydrate >= appleIngredients.carbohydrate * qty
                            && stock.flavour >= appleIngredients.flavour * qty) {
                            stock.carbohydrate -= appleIngredients.carbohydrate * qty;
                            stock.flavour -= appleIngredients.flavour * qty;
                            return 'Success';
                        } else {
                            if (stock.carbohydrate < appleIngredients.carbohydrate * qty) {
                                return `Error: not enough carbohydrate in stock`;
                            } else if (stock.flavour < appleIngredients.flavour * qty) {
                                return `Error: not enough flavour in stock`;
                            }
                        }
                    }; break;

                    case 'lemonade': {
                        if (stock.carbohydrate >= lemonadeIngredients.carbohydrate * qty
                            && stock.flavour >= lemonadeIngredients.flavour * qty) {
                            stock.carbohydrate -= lemonadeIngredients.carbohydrate * qty;
                            stock.flavour -= lemonadeIngredients.flavour * qty;
                            return 'Success';
                        } else {
                            if (stock.carbohydrate < lemonadeIngredients.carbohydrate * qty) {
                                return `Error: not enough carbohydrate in stock`;
                            } else if (stock.flavour < lemonadeIngredients.flavour * qty) {
                                return `Error: not enough flavour in stock`;
                            }
                        }
                    }; break;

                    case 'burger': {
                        if (stock.carbohydrate >= burgerIngredients.carbohydrate * qty
                            && stock.fat >= burgerIngredients.fat * qty
                            && stock.flavour >= burgerIngredients.flavour * qty) {
                            stock.carbohydrate -= burgerIngredients.carbohydrate * qty;
                            stock.fat -= burgerIngredients.fat * qty;
                            stock.flavour -= burgerIngredients.flavour * qty;
                            return 'Success';
                        } else {
                            if (stock.carbohydrate < burgerIngredients.carbohydrate * qty) {
                                return `Error: not enough carbohydrate in stock`;
                            } else if (stock.fat < burgerIngredients.fat * qty) {
                                return `Error: not enough fat in stock`;
                            } else if (stock.flavour < burgerIngredients.flavour * qty) {
                                return `Error: not enough flavour in stock`;
                            }
                        }
                    }; break;

                    case 'eggs': {
                        if (stock.protein >= eggsIngredients.protein * qty
                            && stock.fat >= eggsIngredients.fat * qty
                            && stock.flavour >= eggsIngredients.flavour * qty) {
                            stock.protein -= eggsIngredients.carbohydrate;
                            stock.fat -= eggsIngredients.fat;
                            stock.flavour -= eggsIngredients.flavour;
                            return 'Success';
                        } else {
                            if (stock.protein < eggsIngredients.protein * qty) {
                                return `Error: not enough protein in stock`;
                            } else if (stock.fat < eggsIngredients.fat * qty) {
                                return `Error: not enough fat in stock`;
                            } else if (stock.flavour < eggsIngredients.flavour * qty) {
                                return `Error: not enough flavour in stock`;
                            }
                        }
                    }; break;

                    case 'turkey': {
                        if (stock.protein >= turkeyIngredients.protein * qty
                            && stock.carbohydrate >= turkeyIngredients.carbohydrate * qty
                            && stock.fat >= turkeyIngredients.fat * qty
                            && stock.flavour >= turkeyIngredients.flavour * qty) {
                            stock.protein -= turkeyIngredients.protein * qty;
                            stock.carbohydrate -= turkeyIngredients.carbohydrate * qty;
                            stock.fat -= turkeyIngredients.fat * qty;
                            stock.flavour -= turkeyIngredients.flavour * qty;
                            return 'Success';
                        } else {
                            if (stock.protein < turkeyIngredients.protein * qty) {
                                return `Error: not enough protein in stock`;
                            } else if (stock.carbohydrate < turkeyIngredients.carbohydrate * qty) {
                                return `Error: not enough carbohydrate in stock`;
                            } else if (stock.fat < turkeyIngredients.fat * qty) {
                                return `Error: not enough fat in stock`;
                            } else if (stock.flavour < turkeyIngredients.flavour * qty) {
                                return `Error: not enough flavour in stock`;
                            }
                        }
                    }; break;

                }

            }; break;

            case 'report': {
                let result = '';

                Object.entries(stock)
                    .forEach(([ingredient, qty]) => result += `${ingredient}=${qty} `);
                return result.trim();
            };

        }
    }
}

let manager = solution();
// console.log(manager('restock flavour 50'));
// console.log(manager('prepare lemonade 4'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));

console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));