function cars(input) {
    
}

cars([
    'create c1', // c1: {}
    'create c2 inherit c1', // c2: {}
    'set c1 color red', // c1: {color: red}, c2: {color: red}
    'set c2 model new', // c2: {color: red, model: new}
    'print c1', // color: red
    'print c2' // model: new, color: red
]);