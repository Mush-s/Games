import { useEffect, useState } from "react";
import Cell from "./Cell";
import { Pattern } from "../Patterns/Pattern";
import GameButtons from "./GameButtons/GameButtons";

import "./Game.css";
import { OverLay } from "../..";

const Game = () => {
  const [player, setPlayer] = useState("O");
  const [countDown, setCountDown] = useState(8);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState();
  const [mode, setMode] = useState("Normal");
  const [time, setTime] = useState(5);

  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    checkWin();
  });

  let timer;
  const updataCount = () => {
    timer = setInterval(() => {
      setTime((preC) => preC - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
      if (player === "O" || "๐") {
        setResult("X is Winner");
        setGameOver(true);
      }
      if (player === "X" || "๐โโ๏ธ") {
        setResult("O is Winner");
        setGameOver(true);
      }
    }
  };

  useEffect(() => {
    updataCount();
    console.log(time);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    setTime(5);
  }, [player]);

  const isCellEmpty = (index) => cellValues[index] === "";

  //Cell Clicked ใใใใ

  const clickHandler = (index) => {
    if (isCellEmpty(index)) {
      setCountDown(countDown - 1);
      const newCellValues = [...cellValues];
      newCellValues[index] = player;
      setCellValues(newCellValues);

      if (player === "O" || "๐") {
        setPlayer("X");
      } else {
        setPlayer("O");
      }

      if (countDown === 0) {
        setGameOver(true);
        setResult("ๅผใๅใใงใ");
      }
      // Repaint mode ๅฆ็
    } else {
      if (mode === "Repaint") {
        setCountDown(countDown - 1);
        const newCellValues = [...cellValues];
        newCellValues[index] = player;
        setCellValues(newCellValues);
      }
      setMode("Normal");
    }
  };

  //Reset Button ใใใใ

  const resetHandler = () => {
    setTime(5);
    setPlayer("O");
    setCountDown(8);
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setGameOver(false);
    setResult();
  };

  //Back button ใใใใ

  const backHandler = () => {
    // setCountDown(countDown + 1);
    // const backedValues = [...cellValues]
    // setCellValues(backedValues)
    // if (player === "O") {
    //   setPlayer("X");
    // } else {
    //   setPlayer("O");
    // }
  };

  //Change button ใใใใ

  const ChangeHandler = () => {
    if (mode === "Normal") {
      setMode("Repaint");
    }
    if (mode === "Repaint") {
      setMode("Normal");
    }
    if (player === "O") {
      setPlayer("๐");
    } else {
      setPlayer("๐โโ๏ธ");
    }
  };
  //ๅใก่ฒ?ใๅคๅฎ

  const checkWin = () => {
    Pattern.forEach((currPa) => {
      const firstPlayer = cellValues[currPa[0]];
      if (firstPlayer === "") return;
      console.log(cellValues[currPa[0]]);
      let foundWiiningPattern = true;
      currPa.forEach((i) => {
        if (cellValues[i] !== firstPlayer) {
          foundWiiningPattern = false;
        }
      });

      if (foundWiiningPattern) {
        if (player === "O" || "๐") {
          setResult("X is Winner");
          setGameOver(true);
        } else {
          setResult("O is Winner");
          setGameOver(true);
        }
      }
    });
  };
  return (
    <div className="game">
      <div className="result">{result}</div>
      {!gameOver && <div className="turn">{player}'s Turn</div>}
      {!gameOver && <p className="timer">Have {time} seconds</p>}
      {cellValues.map((value, index) => (
        <Cell key={index} value={value} onClick={() => clickHandler(index)} />
      ))}
      <GameButtons
        mode={mode}
        onClick={resetHandler}
        onBack={backHandler}
        onChange={ChangeHandler}
      />
      {gameOver && <OverLay onClick={resetHandler} result={result} />}
    </div>
  );
};

export default Game;
