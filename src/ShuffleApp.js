import axios from 'axios';
import React, {useState, useEffect} from 'react';
import DrawnCards from './DrawnCards';


/** ShuffleApp
 * 
 * Shuffles a new a deck and handles drawing of cards from deck
 * 
 * States:
 * - drawnCards [{card}, {card}, ...]
 *      where card is like { image, images, code, suit, value }
 * - deck { success, deck_id, shuffled, remaining }
 * - isShuffling boolean whether deck needs be shuffled or not
 * 
 */
function ShuffleApp() {
    const [drawnCards, setDrawnCards] = useState([]);
    const [deck, setDeck] = useState({});
    const [isShuffling, setShuffling] = useState(true);


    useEffect(function shuffleDeckWhenMounted() {
        async function shuffle() {
            const resp = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
            setDeck(resp.data);
            setShuffling(false);
        }
        shuffle();
    }, [ ]);

    async function handleDraw() {
        const resp = await axios.get(`http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
        const card = resp.data.cards[0];
        setDrawnCards(drawnCards => [...drawnCards, card]);
    }

    if (isShuffling) return <i>Shuffling Deck</i>

    return (
        <div className="ShuffleApp">
            <button onClick={handleDraw}>Draw a card!</button>
            <DrawnCards cards={drawnCards}/>
        </div>
    )
}

export default ShuffleApp;