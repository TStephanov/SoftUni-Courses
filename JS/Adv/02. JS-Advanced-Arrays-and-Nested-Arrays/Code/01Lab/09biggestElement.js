function biggest(input) {
    let comboArray = [];
    input.forEach(array => {
        array.forEach(element => comboArray.push(element));
    });
    
    /**
     let result = Number.MIN_SAFE_INTEGER;
     comboArray.forEach(number => {
         number > result ? result = number : number = number
     });
     
     return result;    
    */
   return Math.max(...comboArray);
}

biggest([
    [20, 50, 10],
    [8, 33, 145]
]);
console.log('--------');
biggest([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);