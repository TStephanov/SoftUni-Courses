function solve() {
    let activeMoviesList = document.querySelector('section[id="movies"] ul');
    const onScrBtn = document.querySelectorAll('button')[0];
    onScrBtn.addEventListener('click', myFunc);

    function myFunc(e) {
        // let p = document.createElement('p');
        // p.textContent = 'Yeahhh ! ! ! :)'
        // activeMoviesList.appendChild(p);

        const inputFields = document.querySelectorAll('input[type="text"]');
        const movie = Array.from(inputFields)[0]; // .value
        const hall = Array.from(inputFields)[1]; // .value
        const price = Array.from(inputFields)[2]; // .value
        let validValues = true;

        // check for all fields having values
        for (let field of Array.from(inputFields)) {
            if (field.value === '') {
                validValues = false;
                break;
            }
        };

        if (validValues && isNaN(Array.from(inputFields)[2].value) === false) { // 

            let newLi = document.createElement('li');

            let newSpan = document.createElement('span');
            newSpan.textContent = movie.value;
            newLi.appendChild(newSpan);
            movie.value = '';

            let newStrong = document.createElement('strong');
            newStrong.textContent = `Hall: ${hall.value}`;
            newLi.appendChild(newStrong);
            hall.value = '';

            let newDiv = document.createElement('div');
            let priceStrong = document.createElement('strong');
            priceStrong.textContent = Number(price.value).toFixed(2);
            newDiv.appendChild(priceStrong);
            price.value = '';

            let newInput = document.createElement('input');
            newInput.placeholder = 'Tickets Sold';
            newDiv.appendChild(newInput);
            // console.log(newInput);

            let newBtn = document.createElement('button');
            newBtn.textContent = 'Archive';
            newBtn.addEventListener('click', archive);
            newDiv.appendChild(newBtn);
            newLi.appendChild(newDiv)

            activeMoviesList.appendChild(newLi);
        }
        e.preventDefault(); // use it, as default behavior of a button inside a form submits the form, hence pressing it doesn't executes expect change of activeMoviesList, but nulls the customer input only instead(standart form behavior)
    }
    
    function archive(e) {
        const inputFld = e.target.parentNode.querySelector('input');
        console.log(isNaN(Number(inputFld.value)));
        if (isNaN(Number(inputFld.value)) === false && inputFld.value !== '') { // "inputFld.value !== ''" because isNaN on empty strint = false
            let archiveSection = document.querySelector('section[id="archive"] ul');
            const movieName = e.target.parentNode.parentNode.querySelector('span').textContent;
            const ticketPrice = e.target.parentNode.parentNode.querySelector('div strong').textContent;
            const ticketsCount = e.target.parentNode.parentNode.querySelector('input').value;
            const ticketsPrice = ticketsCount * ticketPrice;
            
            let newLi = document.createElement('li');

            let spanName = document.createElement('span');
            spanName.textContent = movieName;
            newLi.appendChild(spanName);

            let strongTotalPrice = document.createElement('strong');
            strongTotalPrice.textContent = `Total amount: ${ticketsPrice.toFixed(2)}`;
            newLi.appendChild(strongTotalPrice);

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', del);
            newLi.appendChild(deleteBtn);

            archiveSection.appendChild(newLi);

            e.target.parentNode.parentNode.remove(e.target.parentNode.parentNode);
        }
    }

    function del(e) {
        e.target.parentNode.remove(e.target.parentNode);
    }

    document.querySelector('section[id="archive"] button').addEventListener('click', (e) => {
        let ulElement = e.target.parentNode.querySelector('ul');
        while (ulElement.firstChild) {
            console.log('clicked remove');
            ulElement.removeChild(ulElement.firstChild);
        }
    });
}