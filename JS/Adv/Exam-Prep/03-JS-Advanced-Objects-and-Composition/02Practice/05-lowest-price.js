function lowestPrice(input) {
    let products = {};

    input.forEach(townInfo => {
        let [townName, productName, productPrice] = townInfo.split(' | ');
        productPrice = Number(productPrice);

        if (!products.hasOwnProperty(productName)) {
            products[productName] = {
                townName: '',
                productPrice: Number.MAX_SAFE_INTEGER
            };
        }

        if (productPrice < products[productName].productPrice) {
            products[productName].townName = townName;
            products[productName].productPrice = productPrice;
        }
    });

    Object.keys(products).forEach(productName => {
        // {productName} -> {productLowestPrice} ({townName})
        console.log(`${productName} -> ${products[productName].productPrice} (${products[productName].townName})`);
    });
}

lowestPrice([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);