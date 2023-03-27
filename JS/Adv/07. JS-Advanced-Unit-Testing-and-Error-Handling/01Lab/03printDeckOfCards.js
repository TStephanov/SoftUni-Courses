function printDeckOfCards(cards) {
    let resultDeck = [];
    let hasInvalidCard = false;

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
            return {};
        }
    }

    for (let card of cards) {
        let face = card[0];
        let suit = card[1];

        if (card.length > 2) {
            face = card.slice(0, 2);
            suit = card[2];
        }

        const result = cardCreator(face, suit);

        if (Object.entries(result).length !== 0) {
            resultDeck.push(result.toString());
        } else {
            console.log(`Invalid card: ${face}${suit}`);
            hasInvalidCard = true;
            break;
        }
    }

    if (!hasInvalidCard) {
        console.log(resultDeck.join(' '));
    }
}

// printDeckOfCards(['AS', 'KH', '1C']);
printDeckOfCards(['AS', '10D', 'KH', '2C']);
// printDeckOfCards(['5S', '3D', 'QD', '1C']);