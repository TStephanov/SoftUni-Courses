function lowestPrice(input) {
    let products = {};

    for (let line of input) {
        let [city, product, price] = line.split(' | ');
        price = Number(price);

        if (products.hasOwnProperty(product) === false) {
            products[product] = {
                city,
                price: [price]
            };
        } else {
            if (price < products[product].price) {
                products[product].city = city;
                products[product].price = price;
            }
        };
    }
    
    for (let product of Object.keys(products)) {
        console.log(`${product} -> ${products[product].price} (${products[product].city})`);
    }
}

lowestPrice([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 5',
    'Sample Town | Peach | 1',
    'Sample Town | Orange | 4',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);