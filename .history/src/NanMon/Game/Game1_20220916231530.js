import Back from "../../Components/Back/Back";
import BeforeGame from "../BeforeGame/BeforeGame";
import Character from "./Character/Character";
import { useState } from "react";
import "./Game1.css";

const Game1 = () => {
  const [start, setStart] = useState(false);
  const clickHandler = () => {
    setStart(true);
  };
  return (
    <div className="game">
      {start && <Back /> && <Character />}
      {!start && <BeforeGame onClick={clickHandler} />}
    </div>
  );
};
export default Game1;
