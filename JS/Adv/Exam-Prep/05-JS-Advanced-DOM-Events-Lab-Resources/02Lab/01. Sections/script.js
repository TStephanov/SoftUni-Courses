function create(words) {
   let contentElement = document.getElementById('content');

   words.forEach(word => {
      let newDiv = document.createElement('div');
      newDiv.addEventListener('click', (e) => {
         e.target.querySelector('p').style.display = 'block';
      });
      let newP = document.createElement('p');
      newP.style.display = 'none';
      newP.textContent = word;
      newDiv.appendChild(newP);
      contentElement.appendChild(newDiv);
   });
}