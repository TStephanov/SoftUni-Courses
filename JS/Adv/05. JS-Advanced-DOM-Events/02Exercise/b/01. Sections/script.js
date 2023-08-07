function create(words) {
   // create new div, p with string in it; display: none
   for (let word of words) {
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      newP.textContent = word;
      newP.style = 'display: none';
      newDiv.appendChild(newP);

      let contentArea = document.getElementById('content');
      contentArea.appendChild(newDiv);

      newDiv.addEventListener('click', (e) => {
         e.target.querySelector('p').style = 'display: inline';
      });
   }
}