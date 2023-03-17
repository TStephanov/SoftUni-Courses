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

    
}


let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 