function solve() {
   // empty object
   let products = {};
   let textAreaElement = document.querySelector('textarea');

   // append each product details to the object - name, price and print to textarea
   const productsDetailsElement = document.querySelectorAll('div[class="product"]');

   for (let product of productsDetailsElement) {
      let productName = product.querySelector('div[class="product-title"]').textContent;
      let productPriceString = product.querySelector('div[class="product-line-price"]').textContent;

      const buttonName = product.querySelector('button[class="add-product"]');
      buttonName.addEventListener('click', (e) => {
         if (products.hasOwnProperty(productName) === false) {
            products[productName] = {
               price: 0
            }
         }

         products[productName].price += Number(productPriceString);

         let textElementToAdd = document.createTextNode(`Added ${productName} for ${Number(productPriceString).toFixed(2)} to the cart.\n`);
         textAreaElement.appendChild(textElementToAdd);
      });
   }

   // "Checkout" - calculate total amount, print it to textarea
   const checkoutButtonElement = document.querySelector('button[class="checkout"]');

   // disable all buttons
   checkoutButtonElement.addEventListener('click', (e) => {
      const productsNamesList = Object.keys(products);
      const prices = Object.values(products);
      let totalPrice = 0;

      prices.forEach(priceInfo => {
         const price = Number(priceInfo.price);
         totalPrice += price;
      });

      const priceInfoElement = document.createTextNode(`You bought ${productsNamesList.join(', ')} for ${totalPrice.toFixed(2)}.`);
      textAreaElement.appendChild(priceInfoElement);

      const addButtonsElement = document.querySelectorAll('button[class="add-product"]');

      for (let button of addButtonsElement) {
         button.setAttribute('disabled', '');
      }

      e.target.setAttribute('disabled', '');
   });

   let printButton = document.getElementById('print');
   printButton.addEventListener('click', () => {
      console.log(products);
   });
}