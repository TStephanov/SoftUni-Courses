function storeCatalogue(input) {
    let catalogue = {};
    input.sort((a, b) => a.localeCompare(b));

    for (let line of input) {
        let [product, price] = line.split(' : ');
        price = Number(price);

        catalogue[product] = price;
    }
    
    // for (let product of Object.keys(catalogue)) {
    //     console.log(`${product} : ${catalogue[product]}`);
    // }

    let ordered = {};

    for (let product of Object.keys(catalogue)) {
        let leadingLetter = product[0];
        let productPrice = catalogue[product];

        if (ordered.hasOwnProperty(leadingLetter) === false) {
            ordered[leadingLetter] = [];
        }
        ordered[leadingLetter].push(`${product}: ${productPrice}`);
    }

    for (let letter of Object.keys(ordered)) {
        let productPriceArr = ordered[letter];
        
        console.log(letter);
        productPriceArr.forEach(combo => console.log(`  ${combo}`));
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

// {
//     'Anti-Bug Spray': 15,
//     Apple: 1.25,
//     Appricot: 20.4,
//     Boiler: 300,
//     Deodorant: 10,
//     Fridge: 1500,
//     'T-Shirt': 10,
//     TV: 1499
// }

// console.log('-------------');
// storeCatalogue([
//     'Banana : 2',
//     'Rubic\'s Cube : 5',
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10'
// ]);