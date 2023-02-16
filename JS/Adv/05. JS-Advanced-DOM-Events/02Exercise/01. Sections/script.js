function create(words) {
   // add event listener thorugh event delegation
   
   let mainDivElement = document.getElementById('content');

   for (let word of words) {
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      let newContent = document.createTextNode(word);
      newP.appendChild(newContent);
      newP.style.display = 'none';      
      newDiv.appendChild(newP);
      mainDivElement.appendChild(newDiv);
   }

   let divElements = document.querySelectorAll('div div');
   
   for (let div of divElements) {
      div.addEventListener('click', (e) => {
         console.log(e.target.firstChild);
         e.target.firstChild.style.display = '';
      });
   }
}