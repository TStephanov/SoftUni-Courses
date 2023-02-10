function oddPositions(input) {
    /**
     // el-ts at odd positions
     let oddElements = [];
     for (let i = 0; i < input.length; i++) {
         if (i % 2 === 1) {
             oddElements.push(input[i]);
         }
     }
     
     // double
     let doubledElements = [];
     oddElements.forEach(el => {
         let result = 0;
         result = el * 2;
         doubledElements.push(result);
     })
     
     // reverse
     let reversedElements = [];
     for (let i = doubledElements.length - 1; i >=0; i--) {
         reversedElements.push(doubledElements[i]);
     }
     
     return reversedElements.join(' ');    
    */
   return input
   .filter((a, index) => index % 2 === 1)
   .map(number => number * 2)
   .reverse()
   .join(' ');
}

console.log(oddPositions([10, 15, 20, 25]));
console.log('-----------');
console.log(oddPositions([3, 0, 10, 4, 7, 3]));