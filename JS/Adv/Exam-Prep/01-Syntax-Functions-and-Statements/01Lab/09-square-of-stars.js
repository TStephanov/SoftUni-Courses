function test(input) {
    function formSquare(param) {
        let finalSquare = '';

        // for (let i = 0; i < param; i++) {
        //     let row = '';
        //     for (let x = 0; x < param; x++) {
        //         row += '* ';
        //     }
        //     finalSquare += `${row}\n`;
        // }

        for (let i = 0; i < param; i++) {
            let row = '';
            row += '* '.repeat(param);
            row += '\n';
            finalSquare += row;
        }

        return finalSquare;
    }

    if (input !== undefined) {
        console.log(formSquare(input));
    } else {
        console.log(formSquare(5));
    }
}

test(1);
test(3);
test(5);
test(7);

// function test(input) {
//     function formSquare(param) {
//         let finalSquare = '';

//         for (let i = 0; i < param; i++) {
//             let row = '';
//             row += '* '.repeat(param);
//             row += '\n';
//         }

//         return finalSquare;
//     }

//     if (input !== undefined) {
//         console.log(formSquare(input));
//     } else {
//         console.log(formSquare(5));
//     }
// }