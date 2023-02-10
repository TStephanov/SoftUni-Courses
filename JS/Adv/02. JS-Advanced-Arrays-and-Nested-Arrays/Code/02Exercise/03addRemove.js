function addRemove(input) {
    let resultArr = [];
    let num = 1;

    let collection = {
        add,
        remove
    }

    function add(arr, number) {
        arr.push(number);
        return arr;
    }

    function remove(arr) {
        return arr.slice(0, arr.length - 1);
    }

    for (let command of input) {
        let action = collection[command];
        resultArr = action(resultArr, num);
        
        num++;
    }

    if (resultArr.length !== 0) {
        console.log(resultArr.join('\n')); 
    } else {
        console.log('Empty');
    }
}

// addRemove(['add']);
// addRemove(['add', 'add', 'add', 'add']);
// 1
// 2
// 3
// 4
// addRemove(['add', 'add', 'remove', 'add', 'add']);
// 1
// 4
// 5
addRemove(['remove', 'remove', 'remove'])
// Empty