function create(words) {
   let contentElement = document.getElementById('content');
   
   // words.forEach(word => {
   //    let newDivElement = document.createElement('div');
   //    newDivElement.addEventListener('click', (e) => {
   //       e.target.querySelector('p').style.display = 'block';
   //    });
   //    let newParagraphElement = document.createElement('p');
   //    newParagraphElement.textContent = word;
   //    newParagraphElement.style.display = 'none';
   //    newDivElement.appendChild(newParagraphElement);
      
   //    contentElement.appendChild(newDivElement);
   // });

   // Event delegation
   words.forEach(word => {
      let newDivElement = document.createElement('div');
      // newDivElement.addEventListener('click', (e) => {
      //    e.target.querySelector('p').style.display = 'block';
      // });
      let newParagraphElement = document.createElement('p');
      newParagraphElement.textContent = word;
      newParagraphElement.style.display = 'none';
      newDivElement.appendChild(newParagraphElement);
      
      contentElement.appendChild(newDivElement);
   });

   contentElement.addEventListener('click', (ev) => {
      ev.target.querySelector('p').style.display = 'block';
   });

}