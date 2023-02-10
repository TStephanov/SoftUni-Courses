function search() {
    // take searched text
    let string = document.getElementById('searchText');
    let searchedText = string.value;

    
    // take list of cities
    let citiesList = document.querySelectorAll('ul li');
    let cities = Array.from(citiesList);
    
    // clear user input and results from previous search(if any)
    let counterString = document.querySelector('#result');
    counterString.textContent = '';
    for (let city of cities) {
        city.style = '';
    }

    // find city having user input
    let counter = 0;

    for (let city of cities) {
        if (city.textContent.search(searchedText) === 0) {
            counter++;
            // modify matched string - bold, underline
            city.style['font-weight'] = 'bold';
            city.style['text-decoration'] = 'underline';
        }
    }

    // print count
    counterString.textContent = `${counter} matches found`;
}