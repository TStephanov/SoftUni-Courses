function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let list = document.querySelectorAll('.container tbody tr');
        let toSearch = document.getElementById('searchField');        
        
        for (let line of list) {
            let parsed = line.textContent.trim();
            console.log(line);
            
            if (parsed.includes(toSearch.value)) {
                console.log(parsed);
                line.className = 'select';
            } else {
                line.className = '';
            }
        }

        toSearch.value = '';
    }
}