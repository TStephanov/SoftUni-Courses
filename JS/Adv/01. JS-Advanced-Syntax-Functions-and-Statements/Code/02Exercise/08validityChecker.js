function validityCheck(x1, y1, x2, y2) {
    function check(p1, p2, p3, p4) {
        let result = Math.sqrt(Math.pow(p3 - p1, 2) + Math.pow(p4 - p2, 2));

        if (Number.isInteger(result)) {
            console.log(`{${p1}, ${p2}} to {${p3}, ${p4}} is valid`);
        } else {
            console.log(`{${p1}, ${p2}} to {${p3}, ${p4}} is invalid`);
        }
    }

    check(x1, y1, 0, 0);
    check(x2, y2, 0, 0);
    check(x1, y1, x2, y2);
}

validityCheck(3, 0, 0, 4);
// {3, 0} to {0, 0} is valid
// {0, 4} to {0, 0} is valid
// {3, 0} to {0, 4} is valid
// validityCheck(2, 1, 1, 1);
// {2, 1} to {0, 0} is invalid
// {1, 1} to {0, 0} is invalid
// {2, 1} to {1, 1} is valid