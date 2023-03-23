function solve() {
    let activeMoviesList = document.querySelector('section[id="movies"] ul');
    let onScrBtn = document.querySelector('form[id="add-new"] button');
    onScrBtn.addEventListener('click', (e) => {
        debugger;
        let p = document.createElement('p');
        p.textContent = 'clicked';
        activeMoviesList.appendChild(p);
        console.log('clicked');
        console.log(e);
    });

    // function addItem(event) {
    //     console.log('clicked');
    //     console.log(event);
    //     const inputFields = document.querySelectorAll('input[type="text"]');
    //     let validValues = true;
    //     /**
    //      for (let field of Array.from(inputFields)) {
    //          if (field.value === '') {
    //              validValues = false;
    //              break;
    //          }
    //      };
 
    //      if (true) { // validValues && isNaN(Array.from(inputFields)[2].value) === false
    //          const movie = Array.from(inputFields)[0].value;
    //          const hall = Array.from(inputFields)[1].value;
    //          const price = Number(Array.from(inputFields)[2].value);
             
    //          let newLi = document.createElement('li');
             
    //          let newSpan = document.createElement('span');
    //          newSpan.textContent = movie;
    //          newLi.appendChild(newSpan);
    //          console.log(`newSpan: ${newSpan.textContent}`);
             
    //          let newStrong = document.createElement('strong');
    //          newStrong.textContent = hall;
    //          newLi.appendChild(newStrong);
    //          console.log(`newStrong: ${newStrong.textContent}`);
             
    //          let newDiv = document.createElement('div');            
    //          let priceStrong = document.createElement('strong');
    //          priceStrong.textContent = price.toFixed(2);
    //          newDiv.appendChild(priceStrong);
    //          console.log(`priceStrong: ${priceStrong.textContent}`);
             
    //          let newInput = document.createElement('input');
    //          newInput.placeholder = 'Tickets Sold';
    //          newDiv.appendChild(newInput);
    //          console.log(newInput);
             
    //          let newBtn = document.createElement('button');
    //          newBtn.addEventListener('click', archive);
    //          newBtn.textContent = 'Archive';
    //          newDiv.appendChild(newBtn);
    //          console.log(`newBtn: ${newBtn.textContent}`);
             
    //          // debugger;
    //          newLi.appendChild(newDiv)
    //          activeMoviesList.appendChild(newLi);
    //      }
    //      */
    //  }        

    function archive() {

    }
}