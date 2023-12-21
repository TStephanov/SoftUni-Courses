function namesList(input) {
    input
        .sort((a, b) => a.localeCompare(b))
        .forEach((el, i) => console.log(`${i + 1}.${el}`));
}

namesList(["John", "Bob", "Christina", "Ema"]);