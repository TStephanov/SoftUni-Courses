function search() {
   const towns = document.querySelectorAll('ul#towns li');
   const inputElement = document.querySelector('#searchText');
   const textResult = document.getElementById('result');
   let counter = 0;

   Array.from(towns)
      .forEach(town => {
         if (town.textContent.includes(inputElement.value)) {
            town.style.fontWeight = 'bold';
            counter++;
         } else {
            // town.style.fontWeight = ''; // leaves empty style of the element
            town.removeAttribute('style'); // remove the style attribute completely
         }
      });

   textResult.textContent = `${counter} matches found`;
}