function demo() {
    let array = ['One', 'Two', 'Three', 'One', 'Two', 'Three'];
    // while (array.includes('One')) {
    //     array.splice(array.indexOf('One'), 1);
    // }

    array = array.filter(el => el !== 'One');

    console.log(array);
}

demo();