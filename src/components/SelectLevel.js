import React, { useState } from 'react'
import GameLevel from './GameLevel'
import { useNavigate } from 'react-router-dom';

const SelectLevel = () => {
  const [gameLevel, setGameLevel] = useState(null);
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (gameLevel == null) {
      alert("Please select a difficulty level");
      return;
    }
    navigate("/" + gameLevel);
  };

  return (
    <div style={{
      alignSelf: "center",
      minWidth: "600px",
      minHeight: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      border: "solid 2px black",
      borderRadius: "10px",
      padding: "10px",
    }}>
      <h1 style={{ alignSelf: "center" }}>Select a level</h1>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
      }}>
        <GameLevel id={"easy"} name="Easy" size={3} setGameLevel={setGameLevel} />
        <GameLevel id={"medium"} name="Medium" size={5} setGameLevel={setGameLevel} />
        <GameLevel id={"hard"} name="Hard" size={7} setGameLevel={setGameLevel} />
      </div>
      <button style={{ fontSize: "20px", paddingLeft: "20px", paddingRight: "20px" }}
        onClick={handleOnClick}>
        Play <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div >
  )
}

export default SelectLevel
