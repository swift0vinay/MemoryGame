import React, { act, useEffect, useState } from 'react'
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const tiles = [
    { "src": "airplane", "matched": false },
    { "src": "bath-tub", "matched": false },
    { "src": "cocktail", "matched": false },
    { "src": "hotel", "matched": false },
    { "src": "polaroid", "matched": false },
    { "src": "surf", "matched": false },
    { "src": "emoji", "matched": false },
    { "src": "card", "matched": false },
    { "src": "number", "matched": false },
];

const Game = ({ level, size }) => {
    const navigate = useNavigate();

    const [cards, setCards] = useState([]);
    const [moves, setMoves] = useState(0);

    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);

    const [disabled, setDisabled] = useState(false);

    const [matchedCards, setMatchedCards] = useState(0);

    const handleChoice = (card) => {
        if (firstCard == null) {
            setFirstCard(card);
        } else {
            if (firstCard.id === card.id) {
                resetTurn();
            } else {
                setSecondCard(card);
            }
        }
    };

    const updateCards = (firstCard, secondCard) => {
        setCards(prevCards => {
            return prevCards.map(card => {
                if (card.id === firstCard.id || card.id === secondCard.id) {
                    return { ...card, matched: true };
                } else {
                    return card;
                }
            })
        });
    }

    const filterCards = () => {
        let randomCards = [...tiles]
            .sort(() => Math.random() - 0.5);
        randomCards = randomCards.slice(0, size);
        let shuffleCards = []
        for (let i = 0; i < size + 1; i++) {
            shuffleCards = shuffleCards.concat(randomCards);
        }
        shuffleCards = shuffleCards.sort((a, b) => {
            return Math.random() - 0.5
        }).map((card) => {
            return {
                ...card,
                id: Math.random()
            }
        })
        setCards(shuffleCards);
    }

    const resetTurn = () => {
        setFirstCard(null);
        setSecondCard(null);
        setMoves(moves + 1);
        setDisabled(false);
    }

    useEffect(() => {
        if (firstCard == null || secondCard == null) {
            return;
        }
        setDisabled(true);
        if (firstCard.src === secondCard.src) {
            updateCards(firstCard, secondCard);
            setMatchedCards(matchedCards + 2);
            resetTurn();
        } else {
            setTimeout(() => resetTurn(), 1000);
        }
    }, [firstCard, secondCard])

    useEffect(() => {
        console.log("Component mounted");
        filterCards();
    }, []);

    useEffect(() => {
        if (cards && cards.length != 0 && matchedCards == cards.length) {
            alert("You won!!")
            navigate("/");
            return;
        }
    }, [matchedCards]);

    return (
        <div >
            <div style={{
                display: "grid",
                rowGap: "20px",
                gridTemplateColumns: "1fr ".repeat(size + 1),
            }}>
                {cards.map(card => <Card
                    level={level}
                    key={card.id}
                    card={card}
                    handleChoice={handleChoice}
                    flipped={card.matched || (firstCard && firstCard.id === card.id) || (secondCard && secondCard.id === card.id)}
                    disabled={disabled}
                />)}
            </div >
            <h1 style={{ textAlign: "center" }}>Moves: {moves}</h1>
        </div >
    )
}

export default Game
