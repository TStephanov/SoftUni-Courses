function demo() {
    let letter = 'aba';
    let arr = letter.split('');

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].charCodeAt(0));
    }
}

demo();