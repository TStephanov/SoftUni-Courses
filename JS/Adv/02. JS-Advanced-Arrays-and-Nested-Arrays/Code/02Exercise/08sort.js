function sort(input) {
    input
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length);

    console.log(input.join('\n'));
}

sort(["alpha", "beta", "gamma"]);
// beta
// alpha
// gamma
sort(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
// Jack
// Isacc
// George
// Theodor
// Harrison
sort(["test", "Deny", "omen", "Default"]);
// Deny
// omen
// test
// Default
