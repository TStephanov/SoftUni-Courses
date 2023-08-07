function solve() {
   // create product list
   // define print text area element
   // define checkout btn and attach event listener to calculate and print final result
   // attach event listener to add buttons for printing product info and store info into productList object
   // attache EL on checkout button for final print
   
   let productsListArr = [];
   let productsTotalSum = 0;
   let printAreaElement = document.getElementsByTagName('textarea')[0];
   let checkoutBtn = document.getElementsByClassName('checkout')[0];
   checkoutBtn.addEventListener('click', checkout);

   const productsElement = document.querySelectorAll('.product');
   Array.from(productsElement).forEach(productInfo => {
      productInfo.querySelector('button[class="add-product"]').addEventListener('click', addToPrint);
   });

   function addToPrint(ev) {
      // Added {name} for {money} to the cart.\n
      const productNameElement = ev.target.parentNode.parentNode.querySelector('.product-title').textContent;
      const productPriceElement = ev.target.parentNode.parentNode.querySelector('.product-line-price').textContent;
      // console.log(productNameElement);
      // console.log(productPriceElement);
      if (productsListArr.includes(productNameElement) === false) { // ensure list is with product unique names
         productsListArr.push(productNameElement);
      }
      productsTotalSum += Number(productPriceElement);

      let string = `Added ${productNameElement} for ${Number(productPriceElement).toFixed(2)} to the cart.\n`;
      printAreaElement.value += string;
   }

   function checkout(ev) {
      // You bought {list} for {totalPrice}.
      printAreaElement.value += `You bought ${productsListArr.join(', ')} for ${productsTotalSum.toFixed(2)}.`;

      Array.from(document.querySelectorAll('button')).forEach(btn => btn.setAttribute('disabled', ''));
   }
}