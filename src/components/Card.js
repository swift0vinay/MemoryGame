import React from 'react'
import "./Card.css";


const Card = ({ level, card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        if (disabled) {
            return;
        }
        handleChoice(card);
    };

    const cardImgStyle = level === "easy" ? {
        height: "150px",
        width: "150px"
    } : level === "medium" ? {
        height: "90px",
        width: "90px"
    } : {
        height: "65px",
        width: "65px"
    }
    return (
        <div className='card' style={{ ...cardImgStyle }}>
            <div className={flipped ? "flipped" : ""}>
                <img style={cardImgStyle} className="front" src={`assets/${card.src}.svg`}
                    alt="card front side" />
                <img style={cardImgStyle} className="back" src={`assets/card-back.svg`}
                    alt="card back side"
                    onClick={handleClick} />
            </div>
        </div >
    )
}

export default Card
