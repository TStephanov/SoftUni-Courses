function solve() {

    // Take "On Screen" btn and add event listener
    let onScreenBtn = document.querySelectorAll('button')[0];
    let moviesList = document.querySelector('section#movies ul');
    let archiveList = document.querySelector('section#archive ul');

    onScreenBtn.addEventListener('click', toTheList);

    function isEmpty(string) {
        return string.length === 0 ? true : false;
    }

    function notANumber(input) {
        if (isNaN(input)) {
            return true;
        } else {
            return false;
        }
    }

    function toTheList(ev) {
        let inputFields = ev.target.parentNode.querySelectorAll('input[type="text"]');
        let hasEmptyField = false;
        let isTicketPriceFldANumber = true;

        // Check if values of each input field are valid
        for (let field of inputFields) {
            if (isEmpty(field.value)) {
                hasEmptyField = true;
                break;
            }
        }

        let ticketPriceFld = ev.target.parentNode.querySelector('input[type="text"]:last-of-type');
        if (notANumber(ticketPriceFld.value)) {
            isTicketPriceFldANumber = false;
        }

        if (hasEmptyField === false && isTicketPriceFldANumber === true) {
            let movieName = ev.target.parentNode.querySelector('input[type="text"]:first-of-type');
            let hallName = ev.target.parentNode.querySelector('input[type="text"]:nth-of-type(2)');
            let ticketPrice = ev.target.parentNode.querySelector('input[type="text"]:last-of-type');

            // Create new elements describing the movie
            let newLi = document.createElement('li');
            let newSpan = document.createElement('span');
            newSpan.textContent = movieName.value;
            newLi.appendChild(newSpan);
            let newStrong = document.createElement('strong');
            newStrong.textContent = `Hall: ${hallName.value}`;
            newLi.appendChild(newStrong);
            
            let newDiv = document.createElement('div');
            let priceStrong = document.createElement('strong');
            priceStrong.textContent = Number(ticketPrice.value).toFixed(2);
            newDiv.appendChild(priceStrong);
            let newInput = document.createElement('input');
            newInput.placeholder = "Tickets sold";
            newDiv.appendChild(newInput);
            let archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';
            //    add event listener to "Archive" btn
            archiveButton.addEventListener('click', archive);
            newDiv.appendChild(archiveButton);            

            newLi.appendChild(newDiv);

            moviesList.appendChild(newLi);

            movieName.value = '';
            hallName.value = '';
            ticketPrice.value = '';
        }

        ev.preventDefault();
    };

    function archive(ev) {
        // "Acrhive" btn click
        let ticketsCountElement = ev.target.parentNode.querySelector('input');
        
        //    check if input field is valid
        if (!notANumber(ticketsCountElement.value) && ticketsCountElement.value.length > 0) {
            const movieName = ev.target.parentNode.parentNode.querySelector('span').textContent;
            const pricePerTicket = Number(ev.target.parentNode.querySelector('strong').textContent);
            //    calculate profit from the movie
            let totalSum = pricePerTicket * Number(ticketsCountElement.value);
            
            //    create element for that movie, add event listener to "Delete" btn
            let newLi = document.createElement('li');
            let newSpan = document.createElement('span');
            newSpan.textContent = movieName;
            newLi.appendChild(newSpan);
            let newStrong = document.createElement('strong');
            newStrong.textContent = `Total amount: ${totalSum.toFixed(2)}`;
            newLi.appendChild(newStrong);
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', (event) => {
                event.target.parentNode.remove();
            });
            newLi.appendChild(deleteButton);
            
            //    move element to the archive section
            archiveList.appendChild(newLi);

            // to remove from the list archived movie
            ev.target.parentNode.parentNode.remove();
        }
    }

    let clearBtn = document.querySelectorAll('button')[1];
    // attache event listener to "Clear" button
    clearBtn.addEventListener('click', (ev) => {
        let archivedMoviesListElement = ev.target.parentNode.querySelectorAll('ul > li');
        Array.from(archivedMoviesListElement).forEach(item => item.remove());
    });
}