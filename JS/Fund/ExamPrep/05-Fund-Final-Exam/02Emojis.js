function emojisCoolness(input) {
    let string = input[0];

    // calculate cool threshold - multipyly all DIGITS(not numbers) in the input
    let coolThreshold = string.match(/\d{1,}/g) // array of digits
        .join('') // if more than 1 digit(e.g. concatenated), we shuld split them, therefore 1st join('')
        .split('') // - then split to separate digits
        .map(a => Number(a)) // parse array elements to numbers
        .reduce((a, b) => a * b); // multiply array numbers

    function coolnessCalculator(string) {
        // methods option
        /*let coolness = string.split('');
        coolness = coolness
        .map(a => a.charCodeAt(0))
        .reduce((a, b) => a + b);
        return coolness;
        */

        // loop option
        let sum = 0;
        for (let i = 0; i < string.length; i++) {
            let num = string[i].charCodeAt(0);
            sum += num;
        }
        return sum;
    }

    /*
    // Option 1 - using arrays for storage
    // find valid emojis
    let pattern = /(\:\:|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let result = '';
    let coolEmojis = [];
    let validEmojis = [];

    while ((result = pattern.exec(string)) !== null) {
        let emoji = result.groups.emoji;
        // - store them into []
        validEmojis.push(emoji);
        // - calculate emoji coolness and check if it's cool
        let emojiCoolness = coolnessCalculator(emoji);
        if (emojiCoolness >= coolThreshold) {
            // -- if yes, store full emoji name(with delmiters), it into []
            coolEmojis.push(result[0]);
        }
    }
    
    // print
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${validEmojis.length} emojis found in the text. The cool ones are:`);
    coolEmojis.forEach(emoji => console.log(emoji));
    */

    // Option 2 - using an object as storage
    // find valid emojis
    let pattern = /(\:\:|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let result = '';
    let validEmojis = {};
    
    while ((result = pattern.exec(string))) {
        let emoji = result.groups.emoji;
        let emojiWithDelimiters = result[0];

        // - store then into an emoji {}
        if (validEmojis.hasOwnProperty(emojiWithDelimiters) === false) {
            validEmojis[emojiWithDelimiters] = {
                name: emoji,
                isCool: false
            };
        }

        // - calculate emoji coolness
        let emojiCoolness = coolnessCalculator(emoji);
        // -- store it into the emoji {}
        validEmojis[emojiWithDelimiters].coolness = emojiCoolness;

        // -- check if emoji is cool and store the info into {}
        if (emojiCoolness >= coolThreshold) {
            validEmojis[emojiWithDelimiters].isCool = true;
        }
    }
    // print
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${Object.entries(validEmojis).length} emojis found in the text. The cool ones are:`);
    
    let coolEmojisArray = Object.entries(validEmojis)
    .filter(row => row[1].isCool === true) // store only cool emojis - e.g. isCool = true
    // .filter(([emoji, emojiInfo]) => emojiInfo.isCool === true); // other option to filter
    coolEmojisArray.forEach(el => {
        let emojiName = el[0];
        console.log(emojiName);
    });
}

emojisCoolness([
    "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
]);
// console.log(' - - - ');
// emojisCoolness([
//     "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"
// ]);
// console.log(' - - - ');
// emojisCoolness([
//     "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
// ]);