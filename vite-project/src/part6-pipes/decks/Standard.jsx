import Deck from "./../classes/Deck";
import Tile from "./../classes/Tile";

export default function Standard() {
    const deck = new Deck();

    // Cross
    for (let i = 0; i < 3; i++) {
        deck.push(new Tile({name: 'Cross', top: true, bottom: true, left: true, right: true}));
    }

    // T
    for (let i = 0; i < 6; i++) {
        deck.push(new Tile({name: 'Tee', top: true, left: true, right: true}));
    }

    // I
    for (let i = 0; i < 12; i++) {
        deck.push(new Tile({name: 'Straight', top: true, bottom: true}));
    }

    // L
    for (let i = 0; i < 24; i++) {
        deck.push(new Tile({name: 'Bend', top: true, left: true}));
    }

    // Dead ends
    for (let i = 0; i < 0; i++) {
        deck.push(new Tile({name: 'Deadend', top: true}));
    }

    // Blanks
    for (let i = 0; i < 5; i++) {
        deck.push(new Tile({name: 'Blank'}));
    }

    return deck;
}
