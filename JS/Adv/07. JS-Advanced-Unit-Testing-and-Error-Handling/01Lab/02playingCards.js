function cardCreator(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }

    if (faces.includes(face)) {
        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face.toString() + this.suit;
            }
        }
    } else {
        throw new Error('This is the error: "Error"');
        // throw new Error(`${face}${suit}`);
    }
}

/*
// Using try and catch
function test() {
    let card;
    try {
        card = cardCreator('J', 'S');
        console.log(card.toString());
    } catch (theError) {
        console.log(theError)
    } finally {
        console.log('Final statement ;)');
    }
}
test();
*/

let card = cardCreator('z', 'S');
card.toString();
// cardCreator('10', 'H');
// let card = cardCreator('1', 'C');
// card.toString();