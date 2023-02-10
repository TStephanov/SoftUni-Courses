function search() {
    let list = document.querySelectorAll('#towns li');
    let text = document.getElementById('searchText').value;
    let listArr = Array.from(list);
    let counter = 0;

    for (let el of listArr) {

        if (el.textContent.includes(text)) {
            counter++;
            el.style.fontWeight = 'bold';
            el.style.textDecoration = 'underline';
        } else {
            el.style.fontWeight = '';
            el.style.textDecoration = '';
        }
    }

    let result = document.getElementById('result');
    result.textContent = `${counter} matches found`;
}
