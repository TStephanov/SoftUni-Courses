function orbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];
    let field = [];
    let max = Math.max(width, height);

    // create emtpy matrix
    for (let i = 0; i < width; i++) {
      let newRow = [];
      for (let z = 0; z < height; z++) {
        newRow.push('');
      }
      field.push(newRow);
    }

    // insert star element;
    field[x][y] = 1;
    let matrixSize = width * height;
    let counter = 1;

    // function to check if the matrix is full - to be used as a condition for while loop
    function isFull(matrix, size) {
      let serviceArray = [];
      for (let row of matrix) {
        for (let el of row) {
            // insert each element different than '' - it's the initial value for each matrix cell, so don't count as filled cell
            if (el !== '') {
              serviceArray.push(el);
            }
        }
      }

      if (serviceArray.length === size) {
        return true;
      } else {
        return false;
      }
    }

    function isValid(maxLimit, index) {
      if (index >= 0 && index < maxLimit) {
        return true;
      } else {
        return false;
      }
    }

    // set initial values
    let rowIncr = x;
    let rowDecr = x;
    let colIncr = y;
    let colDecr = y;
    
    while (max !== 0) {
      counter++;

      rowIncr += 1;
      rowDecr -= 1;
      colIncr += 1;
      colDecr -= 1;

      // SERVICE prints
      // console.log(`rowIncr: ${rowIncr}`);
      // console.log(`rowDecr: ${rowDecr}`);
      // console.log(`colIncr: ${colIncr}`);
      // console.log(`colDecr: ${colDecr}`);
      // console.log('-----------');

      let isRowIncrValid = isValid(width, rowIncr);
      let isRowDecrValid = isValid(width, rowDecr);
      let isColIncrValid = isValid(height, colIncr);
      let isColDecrValid = isValid(height, colDecr);

      // fill elements
      // - fil top elements
      if (isRowDecrValid) {
        // -- top center
        // console.log(`top center: ${rowDecr} / ${y}`); // SERVICE print
        field[rowDecr][y] = counter;
        // -- top left
        if (isColDecrValid) {
            // console.log(`top left: ${rowDecr} / ${colDecr}`); // SERVICE print
            field[rowDecr][colDecr] = counter;
        }
        // -- top right
        if (isColIncrValid) {
            // console.log(`top right: ${rowDecr} / ${colIncr}`); // SERVICE print
            field[rowDecr][colIncr] = counter;
        }
      }
      // - fill bottom elements
      if (isRowIncrValid) {
        // -- bottom center
        // console.log(`bottom center: ${rowIncr} / ${y}`); // SERVICE print
        field[rowIncr][y] = counter;
        // -- bottom left
        if (isColDecrValid) {
            // console.log(`bottom left: ${rowIncr} / ${colDecr}`); // SERVICE print
            field[rowIncr][colDecr] = counter;
        }
        // -- bottom right
        // console.log(`bottom right: ${rowIncr} / ${colIncr}`); // SERVICE print
        if (isColIncrValid) {
            field[rowIncr][colIncr] = counter;
        }
      }
      // - fill same row elements;
      // -- fill left element
      if (isColDecrValid) {
        // console.log(`same row, left: ${x} / ${colDecr}`); // SERVICE print
        field[x][colDecr] = counter;
      }
      // -- fill right element
      if (isColIncrValid) {
        // console.log(`same row, right: ${x} / ${colIncr}`); // SERVICE print
        field[x][colIncr] = counter;
      }
      max--;
      // console.log('--- END OF CYCLE ---'); // SERVICE print
    }

    // upon each loop cycle, check adjacent elements - increase and decrease by 1 'x' and 'y' of the star
    // - check if new 'x' and 'y' are valid for the matrix(function)
    // -- if yes: fill with counter
    // -- if no: skip

    console.log(matrixSize);
    console.table(field);
}

orbit([4, 4, 1, 2]);
// 3 2 2 2
// 3 2 1 2
// 3 2 2 2
// 3 3 3 3
// orbit([4, 4, 0, 0]);
// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4
// console.log('------------');
// orbit([5, 5, 2, 2]);
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3
// console.log('------------');
// orbit([5, 5, 2, 2]);
//  3  3  3  3  3   
//  3  2  2  2  3  
//  3  2  1  2  3   
//  3  2  2  2  3  
//  3  3  3  3  3
