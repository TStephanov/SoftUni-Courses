function solve() {
    const buttonsElement = document.querySelectorAll('div[class="product-add"]');
    let resultElement = document.querySelector('textarea');
    let checkoutBtn = document.querySelector('button.checkout');
    let products = [];
    let totalPrice = 0;

    Array.from(buttonsElement).forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productName = e.currentTarget.parentNode.getElementsByClassName('product-title')[0].textContent;
            const productPrice = e.currentTarget.parentNode.getElementsByClassName('product-line-price')[0].textContent;
            
            !products.includes(productName) ? products.push(productName) : products;
            totalPrice += Number(productPrice);
            resultElement.textContent += `Added ${productName} for ${Number(productPrice).toFixed(2)} to the cart.\n`
        });
    });


    checkoutBtn.addEventListener('click', (e) => {
        resultElement.textContent += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;
        Array.from(document.querySelectorAll('button[class="add-product"]')).forEach(btn => {
            btn.setAttribute('disabled', 'true');
        });
        e.currentTarget.setAttribute('disabled', 'true');
    });
}