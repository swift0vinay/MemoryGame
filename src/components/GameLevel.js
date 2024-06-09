import React from 'react'

const GameLevel = ({ id, name, setGameLevel }) => {
    const updateLevel = () => {
        setGameLevel(id);
    }
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <input style={{ accentColor: "#23395d", marginRight: "10px" }} type='radio'
                id={id} name="level" value={id} onClick={updateLevel} />
            <h1>{name}</h1>
        </div>
    )
}

export default GameLevel
