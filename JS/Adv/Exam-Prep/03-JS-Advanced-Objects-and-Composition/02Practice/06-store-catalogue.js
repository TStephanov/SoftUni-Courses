function storeCatalogue(input) {
    let catalogue = {};

    input.forEach(productInfo => {
        let [productName, productPrice] = productInfo.split(' : ');
        productPrice = Number(productPrice);
        let productNameFirstLetter = productName.split('')[0];

        if (!catalogue.hasOwnProperty(productNameFirstLetter)) {
            catalogue[productNameFirstLetter] = {};
        };

        catalogue[productNameFirstLetter][productName] = productPrice;
    });

    Object.keys(catalogue)
        .sort((a, b) => a.localeCompare(b))
        .forEach(keyLetter => {
            console.log(keyLetter);

            Object.entries(catalogue[keyLetter])
                .sort((a, b) => a[0].localeCompare(b[0]))
                .forEach(([key, value]) => {
                    console.log(`  ${key}: ${value}`);
                });
        });
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
storeCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);