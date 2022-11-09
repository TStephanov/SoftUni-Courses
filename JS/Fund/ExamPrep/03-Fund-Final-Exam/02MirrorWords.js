function mirror(input) {
    let string = input[0];
    let validPairs = [];
    let mirrorWords = [];
    let pattern = /([\@\#])(?<wordOne>[A-Za-z]{3,})\1{2}(?<wordTwo>[A-Za-z]{3,})\1/g;
    let result = '';

    while ((result = pattern.exec(string)) !== null) {
        let leftWord = result.groups.wordOne;
        let rightWord = result.groups.wordTwo
        validPairs.push([leftWord, rightWord]);

        let rightReversed = rightWord.split('').reverse().join('')
        
        if (leftWord === rightReversed) {
            mirrorWords.push(`${leftWord} <=> ${rightWord}`);
        }
    }
    
    if (validPairs.length === 0) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    } else {
        console.log(`${validPairs.length} word pairs found!`);
        
        if (mirrorWords.length === 0) {
        console.log('No mirror words!');
        } else {
            console.log('The mirror words are:');
            console.log(mirrorWords.join(', '));
        }
    }
    
}

mirror(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
console.log(' - - - ');
mirror(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log(' - - - ');
mirror(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);