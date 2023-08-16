function solve() {
    let buttonElements = document.getElementsByClassName('add-product');
    let resultArea = Array.from(document.getElementsByTagName('textarea'))[0];
    let checkoutButtonElement = document.querySelector('button[class="checkout"]');
    let totalPrice = 0;
    let productsList = [];

    Array.from(buttonElements).forEach(button => {
        button.addEventListener('click', (e) => {
            let productName = e.target.parentNode.parentNode.querySelector('.product-title').textContent;
            let productPrice = Number(e.target.parentNode.parentNode.querySelector('.product-line-price').textContent);

            resultArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
            totalPrice += productPrice;
            if (!productsList.includes(productName)) {
                productsList.push(productName);
            };
        });
    });

    checkoutButtonElement.addEventListener('click', (e) => {
        resultArea.textContent += `You bought ${productsList.join(', ')} for ${totalPrice.toFixed(2)}.`;
        checkoutButtonElement.disabled = 'true';

        Array.from(buttonElements).forEach(button => {
            button.disabled = 'true';
        });
    });
}