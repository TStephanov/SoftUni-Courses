function extract(content) {
    let paragraph = document.getElementById('content');
    let string = paragraph.textContent;
    let pattern = /\((?<name>[A-Za-z ]+)\)/g;
    let result = '';
    let names = [];

    // let namesCollection = string.match(pattern);
    // let namesResult = [];
    // namesCollection.forEach(name => {
    //     // cutt of first and last symbols - e.g. "(" and ")"
    //     name = name.substring(1, name.length -1 );
    //     namesResult.push(name);
    // })

    while ((result = pattern.exec(string)) !== null)  {
        let text = result.groups.name;
        names.push(text);
    }

    // return namesResult.join('; ');
    return names.join('; ');
}