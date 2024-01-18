function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableRowsElement = document.querySelectorAll('table tbody tr');
      const userInput = document.querySelector('tfoot tr td #searchField');

      Array.from(tableRowsElement)
         .forEach(row => {
            row.removeAttribute('class');

            Array.from(row.querySelectorAll('td'))
               .forEach(cell => {
                  if (cell.textContent.includes(userInput.value)) {
                     row.classList.add('select');
                  }
               });

            // innerHTML not a good option, as all the HTML symbols will be also considered as part of the text to search into
            // if (row.innerHTML.includes(userInput.value)) {
            //    row.classList.add('select');
            // } else {
            //    row.removeAttribute('class');
            // }
         });
   }
}