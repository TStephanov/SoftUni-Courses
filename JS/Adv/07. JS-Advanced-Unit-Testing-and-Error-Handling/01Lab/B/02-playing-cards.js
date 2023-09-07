function cardFactory(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '♠',
        H: '♥',
        D: '♦',
        C: '♣'
    }

    if (!faces.includes(face) && !suits[suit]) {
        // "faces.includes(face)" - if not found will be false, !false = true
        // "suits[suit]" - if not found, will be "undefined", therefore => "!undefined", which equals to true
        // "true && true", goes to the if statement
        throw new Error('Error');
    }

    // if (face !== face.toUpperCase()) {
        
    // }

    let card = {
        face,
        suit,
        toString() {
            console.log(this.face + suits[suit]);
        }
    };

    return card;
}

let card = cardFactory('A', 'S');
card.toString();
// let card = cardFactory('A', 'S');
// cardFactory('10', 'H');
// cardFactory('1', 'C');