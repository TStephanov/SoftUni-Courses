function func1() {
    const a = 1;

    function func2() {
        const b = 2;

        function func3() {
            const c = 3;

            function func4() {
                const d = 4;

                return [a, b, c, d];
            }

            return func4();
        }

        return func3();
    }

    return func2();
}

console.log(func1()); // [ 1, 2, 3, 4 ]