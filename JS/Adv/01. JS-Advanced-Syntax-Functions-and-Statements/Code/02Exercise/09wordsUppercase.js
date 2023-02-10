function wordsUppercase(string) {
    // let pattern = /\w{1,}/g;
    // let words = string.match(pattern);
    // console.log(words.join(', ').toUpperCase());
    console.log(string.match(/\w{1,}/g).join(', ').toUpperCase());
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');